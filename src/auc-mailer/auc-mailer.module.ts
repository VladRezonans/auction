import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { AucMailerService } from './auc-mailer.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        MailerModule,
    ],
    providers: [AucMailerService],
    exports: [AucMailerService]
})
export class AucMailerModule {}
