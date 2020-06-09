import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(public service: UserService) {}

    @Get()
    index() {
        return this.service.getUsers();
    }
}
