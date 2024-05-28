import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { user } from '#entity/user';
// import { user } from '../../entity/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private users: Repository<user>,
  ) {}

  public async fetch(username: string, password: string): Promise<user | null> {
    return this.users.findOne({
      where: {
        username: username,
        password: password,
      },
      relations: {
        roles: true,
      },
    });
  }
}
