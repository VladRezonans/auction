import { Bid } from '../../entity/bid.entity';

export class ShowBid {
    id: string;
    userId: string;
    proposedPrice: number;
    createdAt: Date;

    constructor(bid: Bid) {
        this.id = bid.id;
        this.userId = bid.userId;
        this.proposedPrice = bid.proposedPrice;
        this.createdAt = bid.createdAt;
    }
}
