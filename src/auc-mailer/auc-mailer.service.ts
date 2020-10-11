import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';
import { User } from '../entity/user.entity';
import { Lot } from '../entity/lot.entity';
import { ShowOrder } from '../orders/representers/order.show';

@Injectable()
export class AucMailerService {
    constructor(
        @InjectRepository(User) private readonly repositoryUser: Repository<User>,
        private readonly mailerService: MailerService
    ) {}

    public async send(userId: string, lot: Lot, order: ShowOrder): Promise<void> {
        const user = await this.repositoryUser.findOne(userId);

        this.mailerService
            .sendMail({
                to: user.email,
                from: 'auction@email.com',
                subject: `You won the lot ${lot.title}`,
                html: `<b>You won the lot</b><p>Please fill out an order: ${this.linkOrder(order)}</p>`,
            })
            .then(() => {})
            .catch(() => {});
    }

    private linkOrder(order: ShowOrder) {
        const href = `http://auction/orders/${order.id}`;
        return `<a href="${href}">Link</a>`;
    }
}
