import { Order } from '../../entity/order.entity';

export class ShowOrder {
    id: string;
    userId: string;
    lotId: string;
    arrivalLocation: string;
    arrivalType: number;
    status: number;

    constructor(order: Order) {
        this.id = order.id;
        this.userId = order.userId;
        this.arrivalLocation = order.arrivalLocation;
        this.arrivalType = order.arrivalType;
        this.status = order.status;
    }
}
