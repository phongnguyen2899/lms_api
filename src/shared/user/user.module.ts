import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { role } from '#entity/role';
import { user } from '#entity/user';
import { UserService } from './user.service';
// import { user } from '../../entity/user';

@Module({
  imports: [TypeOrmModule.forFeature([user, role])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
