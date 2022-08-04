import { Field, Int, ObjectType } from '@nestjs/graphql';
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from './user.model';

@Entity()
@ObjectType()
export class Address {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  street: string;

  @Field()
  @Column()
  detail: string;

  @Field()
  @Column()
  zipcode: string;

  @Field()
  @Column()
  createdAt: Date;

  @Field()
  @Column()
  updatedAt: Date;

  user: User;
}