import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bid } from '../entity/bid.entity';
import { Lot } from '../entity/lot.entity';
import { ShowBid } from './representers/bid.show';
import { CreateBidDto } from './validators/createBid.dto';
import { OrdersService } from '../orders/orders.service'

@Injectable()
export class BidsService {
    constructor(
        @InjectRepository(Bid) private readonly repositoryBid: Repository<Bid>,
        @InjectRepository(Lot) private readonly repositoryLot: Repository<Lot>,
        private readonly ordersService: OrdersService,
    ) {}

    async create(body: CreateBidDto, userId: number): Promise<ShowBid | void> {
        const bid = new Bid();
        bid.userId = String(userId);
        bid.createdAt = new Date();
        Object.assign(bid, body);

        if (await this.checkLot(bid)) {
            return new ShowBid(await this.repositoryBid.save(bid));
        } else {
            throw new UnprocessableEntityException('This lot has no status in progress');
        }
    }

    async getList(take: number = 10, skip: number = 0): Promise<{ bids: ShowBid[], total: number }> {
        const [bids, total] = await this.repositoryBid.findAndCount({ take, skip });
        return { bids: bids.map(bid => new ShowBid(bid)), total };
    }

    async get(id: number): Promise<ShowBid> {
        const bid = await this.repositoryBid.findOne(id);
        return new ShowBid(bid);
    }

    private async checkLot(bid: Bid): Promise<boolean> {
        const lot = await this.repositoryLot.findOne(bid.lotId);

        if(lot.status !== 1) {
          return false;
        }

        if (lot.estimatedPrice <= bid.proposedPrice) {
            lot.status = 2;
            this.ordersService.create(lot, bid);
        }

        if (lot.currentPrice < bid.proposedPrice) {
            lot.currentPrice = bid.proposedPrice;
        }

        await this.repositoryLot.save(lot);
        return true;
    }
}
