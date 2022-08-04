import { Field, Int, ObjectType} from '@nestjs/graphql';
import { Address } from './address.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

// TODO: [graphql-scalar](https://www.npmjs.com/package/graphql-scalars)
@Entity()
@ObjectType()
export class User {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Field((type) => Int, { nullable: false })
  @Column()
  password: string;

  @Field()
  @Column()
  email: string;
  @Column()

  @Field()
  createdAt: Date;

  @Field()
  @Column()
  updatedAt: Date;

  @Field((type) => Address)
  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address: Address;
}

// userCourses field can be written like below using @TypeormLoader decorator provided by **type-graphql-datalaoader**
