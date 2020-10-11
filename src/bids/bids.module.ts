import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { Bid } from '../entity/bid.entity';
import { Lot } from '../entity/lot.entity';
import { OrdersModule } from '../orders/orders.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Bid, Lot]),
        OrdersModule
    ],
    controllers: [BidsController],
    providers: [BidsService],
    exports: [BidsService]
})
export class BidsModule {}
