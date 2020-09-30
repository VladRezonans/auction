import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { LotsModule } from './lots/lots.module';
import dbConfig from './db-config';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig as TypeOrmModuleOptions),
    UserModule,
    AuthModule,
    LotsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
