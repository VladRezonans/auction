import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from "./validators/createUser.dto";

@Controller('user')
export class UserController {
    constructor(public service: UserService) {}

    @Get()
    index() {
        return this.service.getUsers();
    }

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.createUser(body);
    }
}
