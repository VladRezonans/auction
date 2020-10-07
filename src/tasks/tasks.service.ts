import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lot } from '../entity/lot.entity';
import { Bid } from '../entity/bid.entity';
import { Order } from '../entity/order.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Lot) private readonly repositoryLot: Repository<Lot>,
        @InjectRepository(Bid) private readonly repositoryBid: Repository<Bid>,
        @InjectRepository(Order) private readonly repositoryOrder: Repository<Order>
    ) {}

    @Cron('30 * * * * *')
    async handleLots() {
        console.log('Called task service');

        const pendingLots = await this.repositoryLot.find({ where: 'status = 0 AND "startAt" > NOW()' });
        for(let i = 0; i < pendingLots.length; i += 1) {
            pendingLots[i].status = 1;
        }
        this.repositoryLot.save(pendingLots);

        const endingLots = await this.repositoryLot.find({ where: 'status = 1 AND "endAt" > NOW()' });
        for(let i = 0; i < endingLots.length; i += 1) {
            endingLots[i].status = 2;
            this.repositoryLot.save(endingLots[i]);
            this.createOrder(endingLots[i]);
        }
    }

    private async createOrder(lot: Lot) {
        const bid = await this.repositoryBid.findOne(
            { where: `"lotId"::INTEGER = ${lot.id} AND "proposedPrice" = (SELECT max("proposedPrice") FROM bid WHERE "lotId"::INTEGER = ${lot.id})` }
        );
        const order = new Order();
        Object.assign(order, { lotId: lot.id, userId: bid.userId, arrivalLocation: ' ' });
        this.repositoryOrder.save(order);
    }
}
