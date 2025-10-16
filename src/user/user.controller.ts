import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { User, UserRequest } from './user.vo';
import { UserService } from './user.service';

@Controller('usuario')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('criar')
  store(@Body() userRequest: UserRequest) {
    return this.userService.store(userRequest);
  }

  @Get()
  findByNameAndEmail(
    @Query('name') name: string,
    @Query('email') email: string,
  ) {
    if (this.userService.findByName(name)) {
        return this.userService.findByName(name);
    }

    if (this.userService.findByEmail(email)) {
        return this.userService.findByEmail(email);
    }

  }
}
