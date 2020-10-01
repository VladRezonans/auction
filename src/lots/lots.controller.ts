import { Controller, Get, Post, Param, Body, UseGuards, Request, Query } from '@nestjs/common';
import { CreateLotDto } from './validators/createLot.dto';
import { LotsService } from './lots.service'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('lots')
export class LotsController {
    constructor(private readonly lotsService: LotsService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() body: CreateLotDto, @Request() req) {
        return this.lotsService.create(body, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    index(@Query() { take, skip }) {
        return this.lotsService.getList(take, skip);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    show(@Param('id') id: number) {
        return this.lotsService.get(id);
    }
}
