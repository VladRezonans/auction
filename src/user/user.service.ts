import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entity/user.entity';
import { CreateUserDto } from "./validators/createUser.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private readonly repository: Repository<User>) {}

    async getUsers() {
        return await this.repository.find();
    }

    async createUser(body: CreateUserDto) {
        const user = new User();
        user.birthDay = new Date();
        Object.assign(user, body);
        return await this.repository.save(user);
    }

    async findOne(email: string): Promise<User | undefined> {
        return this.repository.findOne({ where: { email: email }});
    }
}
