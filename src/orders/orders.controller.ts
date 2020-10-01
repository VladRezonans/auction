import { Controller, Put, Get, UseGuards, Request, Query, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service'
import { UpdateOrderDto } from './validators/updateOrder.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @UseGuards(JwtAuthGuard)
    @Put()
    update(@Body() body: UpdateOrderDto, @Request() req) {
        return this.ordersService.update(body, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    index(@Query() { take, skip }, @Request() req) {
        return this.ordersService.getList(take, skip, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    show(@Param('id') id: number, @Request() req) {
        return this.ordersService.get(id, req.user.id)
    }
}
