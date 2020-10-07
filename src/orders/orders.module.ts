import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from '../entity/order.entity'
import { AucMailerModule } from '../auc-mailer/auc-mailer.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Order]),
        AucMailerModule
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
    exports: [OrdersService]
})
export class OrdersModule {}
