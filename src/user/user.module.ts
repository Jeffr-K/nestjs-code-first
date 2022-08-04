import { Module } from '@nestjs/common';
import { DateScalar } from './common/date-scalar.base';
import { AddressService } from './service/address.service';
import { UserService } from './service/user.service';
import { UserMutationResolver } from './resolver/mutation/user-mutation.resolver';
import { UserQueryResolver } from './resolver/query/user-query.resolver';

@Module({
  imports: [],
  providers: [
    DateScalar,
    AddressService,
    UserMutationResolver,
    UserQueryResolver,
    UserService,
    AddressService,
  ],
})
export class UserModule {}
