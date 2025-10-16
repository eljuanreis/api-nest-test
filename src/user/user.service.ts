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
}
