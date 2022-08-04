import { Injectable } from '@nestjs/common';
import { Address } from '../models/address.model';

@Injectable()
export class AddressService {

  constructor() {}

  async find(): Promise<Address> {
    return new Address();
  }
}
