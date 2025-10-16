import { Injectable } from '@nestjs/common';
import { User, UserRequest } from './user.vo';

@Injectable()
export class UserService {

  private users: User[] = [];

  store(req: UserRequest) {
    const user: User = {
      name: req.nome,
      email: req.email,
    };

    this.users.push(user);

    return user;
  }

  findByName(name: string): User | undefined {
    return this.users.find(u => u.name === name);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(u => u.email === email);
  }

  deleteByEmail(email: string): boolean {
    const index = this.users.findIndex(u => u.email === email);
    if (index === -1) return false; // não encontrado

    this.users.splice(index, 1);
    return true; // removido com sucesso
  }
}
