import { Controller, Get } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) { }

  @Get()
  listUsers() {
    // return 'to implement';
    return this.service.getList();
  }
}
