import {Field, InputType} from '@nestjs/graphql';

@InputType()
export class UserDeleteInput {
  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;
}