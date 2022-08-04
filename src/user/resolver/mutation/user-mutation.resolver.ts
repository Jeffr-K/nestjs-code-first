import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { User } from '../../models/user.model';
import { UserService } from '../../service/user.service';
import { UserCreateInput } from '../../input/user-create.input';
import { UserUpdateInput } from '../../input/user-update.input';
import { UserDeleteInput } from '../../input/user-delete.input';

@Resolver((of) => User)
export class UserMutationResolver {

  constructor(
    private userService: UserService,
  ) {}

  @Mutation((returns) => User)
  async create(@Args('userCreateInput') userCreateInput: UserCreateInput): Promise<void> {
    await this.userService.createUser();
  }

  @Mutation((returns) => User)
  async update(@Args('userUpdateInput') userUpdateInput: UserUpdateInput): Promise<void> {
    await this.userService.updateUser();
  }

  @Mutation(() => User)
  async delete(@Args('userDeleteInput') userDeleteInput: UserDeleteInput): Promise<void> {
    await this.userService.deleteUser();
  }
}