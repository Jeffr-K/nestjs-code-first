import { Args, Int, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from '../../models/user.model';
import { Address } from '../../models/address.model';
import { UserService } from '../../service/user.service';
import { AddressService } from '../../service/address.service';

@Resolver((of) => User)
export class UserQueryResolver {

  constructor(
    private userService: UserService,
    private addressService: AddressService,
  ) {}

  @Query((returns) => User)
  async user(@Args('id', { type: () => Int }) id: number): Promise<User> {
    return this.userService.find(id);
  }

  @Query((returns) => User)
  users(): string {
    return '';
  }

  // TODO: ResolverField 에 대해서 공부하기
  @ResolveField()
  async address(@Parent() user: User): Promise<Address> {
    return this.addressService.find();
  }
}