import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BidsController } from './bids.controller';
import { BidsService } from './bids.service';
import { Bid } from '../entity/bid.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Bid])],
    controllers: [BidsController],
    providers: [BidsService],
    exports: [BidsService]
})
export class BidsModule {}
