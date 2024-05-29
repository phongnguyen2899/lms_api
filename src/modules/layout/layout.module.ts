import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/shared/user';
import * as controllers from './controllers';
import { menu } from '#entity/menu';
import { slide } from '#entity/slide';
import * as providers from './providers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // ...Object.values(tables)
      menu,
      slide,
    ]),
    UserModule,
  ],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class LayoutModule {}
