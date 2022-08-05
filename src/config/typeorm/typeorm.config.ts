import { User } from '../../user/models/user.model';
import { Address } from '../../user/models/address.model';

export const TypeormConfig = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'graphql_healthmedi',
  entities: [User, Address],
  synchronize: true,
  logging: true,
};
