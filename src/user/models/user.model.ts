import { Field, Int, ObjectType} from '@nestjs/graphql';
import { Address } from './address.model';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

// TODO: [graphql-scalar](https://www.npmjs.com/package/graphql-scalars)
@Entity()
@ObjectType()
export class User {
  @Field((type) => Int, { nullable: true })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: true })
  @Column()
  username: string;

  @Field((type) => String, { nullable: true })
  @Column()
  password: string;

  @Field({ nullable: true })
  @Column()
  email: string;
  @Column()

  @Field({ nullable: true })
  @Column({ nullable: false })
  createdAt?: Date;

  @Field({ nullable: true })
  @Column({ nullable: false })
  updatedAt?: Date;

  @Field((type) => Address, { nullable: true })
  @OneToOne(() => Address, (address) => address.user)
  @JoinColumn()
  address?: Address;
}

// userCourses field can be written like below using @TypeormLoader decorator provided by **type-graphql-datalaoader**
