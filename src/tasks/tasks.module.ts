import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { Lot } from '../entity/lot.entity';
import { Bid } from '../entity/bid.entity';
import { OrdersModule } from '../orders/orders.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Lot, Bid]),
        OrdersModule
    ],
    providers: [TasksService],
    exports: [TasksService]
})
export class TasksModule {}
