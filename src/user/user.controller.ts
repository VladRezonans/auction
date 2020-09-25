import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from "./validators/createUser.dto";

@Controller('users')
export class UserController {
    constructor(private readonly service: UserService) {}

    @Post()
    create(@Body() body: CreateUserDto) {
        return this.service.createUser(body);
    }

    @Get()
    index() {
        return this.service.getUsers();
    }

    @Get(':id')
    show(@Param('id') userId: number) {
        return this.service.getUser(userId);
    }
}
