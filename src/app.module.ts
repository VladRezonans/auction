import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { MailerModule } from '@nestjs-modules/mailer';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LotsModule } from './lots/lots.module';
import { BidsModule } from './bids/bids.module';
import { OrdersModule } from './orders/orders.module';
import { TasksModule } from './tasks/tasks.module';
import { AucMailerModule } from './auc-mailer/auc-mailer.module';

import dbConfig from './db-config';
import emailConfig from './email-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    ScheduleModule.forRoot(),
    MailerModule.forRoot(emailConfig),
    UserModule,
    AuthModule,
    LotsModule,
    BidsModule,
    OrdersModule,
    TasksModule,
    AucMailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
