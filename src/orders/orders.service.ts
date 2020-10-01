import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm';
import { Order } from '../entity/order.entity'
import { ShowOrder } from './representers/order.show'
import { UpdateOrderDto } from './validators/updateOrder.dto'

@Injectable()
export class OrdersService {
    constructor(@InjectRepository(Order) private readonly repository: Repository<Order>) {}

    async update(body: UpdateOrderDto, userId: number): Promise<ShowOrder> {
        const order = await this.repository.findOne(body.id);

        if (String(userId) !== order.userId) {
            throw new ForbiddenException();
        }

        Object.assign(order, body);
        return new ShowOrder(await this.repository.save(order));
    }

    async getList(take: number = 10, skip: number = 0, userId: number): Promise<{ orders: ShowOrder[], total: number }> {
        const [orders, total] = await this.repository.findAndCount({ take, skip, where: { userId }});
        return { orders: orders.map(order => new ShowOrder(order)), total };
    }

    async get(id: number, userId: number): Promise<ShowOrder> {
        const order = await this.repository.findOne({ where: { userId, id }});
        return new ShowOrder(order);
    }
}
