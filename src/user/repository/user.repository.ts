import { createQueryBuilder, EntityRepository, Repository } from 'typeorm';
import { User } from '../models/user.model';
import { UserCreateInput } from '../input/user-create.input';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async saveUserTo(user: UserCreateInput) {
    const newUser = await createQueryBuilder()
      .insert()
      .into(User)
      .values({ ...user })
      .execute();
  }

  async selectOne() {
    return await createQueryBuilder("user")
      .select()
      .where("user.id = :id", { id: 1 })
      .getOne();
  }
}