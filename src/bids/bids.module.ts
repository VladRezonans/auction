import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { Bid } from '../entity/bid.entity';
import { Lot } from '../entity/lot.entity';
import { Order } from '../entity/order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bid, Lot, Order])],
    controllers: [BidsController],
    providers: [BidsService],
    exports: [BidsService]
})
export class BidsModule {}
