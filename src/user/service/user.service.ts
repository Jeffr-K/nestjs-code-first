import { Injectable } from '@nestjs/common';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor() {}

  async createUser(): Promise<void> {}

  async updateUser(): Promise<void> {}

  async deleteUser(): Promise<void> {}

  async find(id: number): Promise<User> {
    return new User();
  }

}
