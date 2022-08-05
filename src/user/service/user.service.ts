import {Inject, Injectable} from '@nestjs/common';
import { User } from '../models/user.model';
import {UserCreateInput} from '../input/user-create.input';
import {UserRepository} from '../repository/user.repository';

@Injectable()
export class UserService {
  constructor(@Inject(UserRepository) private readonly userRepository: UserRepository) {}

  async createUser(userCreateInput: UserCreateInput): Promise<any> {
    userCreateInput['createdAt'] = new Date();
    userCreateInput['updatedAt'] = new Date();
    await this.userRepository.saveUserTo(userCreateInput);
    const newUser = await this.userRepository.selectOne();
    return newUser;
  }

  async updateUser(): Promise<void> {}

  async deleteUser(): Promise<void> {}

  async find(id: number): Promise<User> {
    return new User();
  }

}
