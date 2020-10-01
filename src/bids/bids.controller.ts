import { Controller, Post, Get, Param, Body, UseGuards, Request, Query } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDto } from './validators/createBid.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('bids')
export class BidsController {
    constructor(private readonly bidsService: BidsService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() body: CreateBidDto, @Request() req) {
        return this.bidsService.create(body, req.user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    index(@Query() { take, skip }) {
        return this.bidsService.getList(take, skip);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    show(@Param('id') id: number) {
       return this.bidsService.get(id)
    }
}
