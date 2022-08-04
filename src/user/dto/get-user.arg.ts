import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

@ArgsType()
export class GetUserArg {

  @Field({ nullable: false })
  @MinLength(5)
  @MaxLength(20)
  @IsString()
  username: string;

  @Field({ nullable: false })
  @IsString()
  password: string;

  @Field({ nullable: false })
  @IsEmail()
  @IsString()
  email: string;

}