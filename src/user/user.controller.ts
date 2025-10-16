import { Body, Controller, Get, Post, Query, Delete } from '@nestjs/common';
import { UserRequest } from './user.vo';
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
    @Query('name') name?: string,
    @Query('email') email?: string,
  ) {
    if (name) {
      const user = this.userService.findByName(name);
      if (user) return user;
    }

    if (email) {
      const user = this.userService.findByEmail(email);
      if (user) return user;
    }

    return { message: 'Usuário não encontrado' };
  }

  @Delete()
  deleteByEmail(@Query('email') email: string) {
    const deleted = this.userService.deleteByEmail(email);
    if (!deleted) {
      return { message: 'Usuário não encontrado' };
    }

    return { message: `Usuário com e-mail ${email} deletado com sucesso` };
  }
}
