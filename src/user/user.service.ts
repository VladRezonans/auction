import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entity/user.entity';
import { CreateUserDto } from "./validators/createUser.dto";
import { ShowUser } from './representers/user.show';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

    async getList(take: number = 10, skip: number = 0): Promise<{ users:ShowUser[], total: number }> {
        const [users, total] = await this.repository.findAndCount({ take, skip });
        return { users: users.map(user => new ShowUser(user)), total };
    }

    async get(userId: number): Promise<ShowUser> {
        const user = await this.repository.findOne(userId);
        return new ShowUser(user);
    }

    async createUser(body: CreateUserDto): Promise<ShowUser> {
        const user = new User();
        user.birthDay = new Date();
        Object.assign(user, body);
        return new ShowUser(await this.repository.save(user));
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { email: email }});
    }
}
