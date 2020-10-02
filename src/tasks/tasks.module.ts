import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { Lot } from '../entity/lot.entity';
import { Bid } from '../entity/bid.entity';
import { Order } from '../entity/order.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Lot, Bid, Order])],
    providers: [TasksService],
    exports: [TasksService]
})
export class TasksModule {}
