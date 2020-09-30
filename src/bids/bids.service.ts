import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Bid } from '../entity/bid.entity'
import { ShowBid } from './representers/bid.show'
import { CreateBidDto } from './validators/createBid.dto'

@Injectable()
export class BidsService {
    constructor(@InjectRepository(Bid) private readonly repository: Repository<Bid>) {}

    async create(body: CreateBidDto, userId: number): Promise<ShowBid> {
        const bid = new Bid();
        bid.userId = String(userId);
        bid.createdAt = new Date();
        Object.assign(bid, body);
        return new ShowBid(await this.repository.save(bid));
    }

    async getList(take: number = 10, skip: number = 0): Promise<{ bids: ShowBid[], total: number }> {
        const [bids, total] = await this.repository.findAndCount({ take, skip });
        return { bids: bids.map(bid => new ShowBid(bid)), total };
    }

    async get(id: number): Promise<ShowBid> {
        const bid = await this.repository.findOne(id);
        return new ShowBid(bid);
    }
}
