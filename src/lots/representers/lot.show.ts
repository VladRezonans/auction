import { Lot } from '../../entity/lot.entity';

export class ShowLot {
    id: number;
    userId: string;
    title: string;
    image: string;
    description: string;
    status: number;
    estimatedPrice: number;
    createdAt: Date;
    startAt: Date;
    endAt: Date;

    constructor(lot: Lot) {
        this.id = lot.id;
        this.userId = lot.userId;
        this.title = lot.title;
        this.image = lot.image;
        this.description = lot.description;
        this.status = lot.status;
        this.estimatedPrice = lot.estimatedPrice;
        this.createdAt = lot.createdAt;
        this.startAt = lot.startAt;
        this.endAt = lot.endAt;
    }
}
