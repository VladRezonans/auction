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

    async getList(): Promise<ShowLot[]> {
        const lots = await this.repository.find();
        return lots.map(lot => new ShowLot(lot));
    }

    async get(id: number): Promise<ShowLot> {
        const lot = await this.repository.findOne(id);
        return new ShowLot(lot);
    }
}
