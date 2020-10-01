import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lot } from '../entity/lot.entity';
import { CreateLotDto } from "./validators/createLot.dto";
import { ShowLot } from './representers/lot.show';

@Injectable()
export class LotsService {
    constructor(@InjectRepository(Lot) private readonly repository: Repository<Lot>) {}

    async create(body: CreateLotDto, userId: number): Promise<ShowLot> {
        const lot = new Lot();
        lot.status = 0;
        lot.userId = String(userId);
        lot.createdAt = new Date();
        Object.assign(lot, body);
        return new ShowLot(await this.repository.save(lot));
    }

    async getList(take: number = 10, skip: number = 0): Promise<{ lots: ShowLot[], total: number }> {
        const [lots, total] = await this.repository.findAndCount({ take, skip });
        return { lots: lots.map(lot => new ShowLot(lot)), total };
    }

    async get(id: number): Promise<ShowLot> {
        const lot = await this.repository.findOne(id);
        return new ShowLot(lot);
    }
}
