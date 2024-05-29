import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import * as controllers from './controllers';
import * as providers from './providers';
import { document } from '#entity/document';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // ...Object.values(tables)
      document,
    ]),
  ],
  controllers: Object.values(controllers),
  providers: Object.values(providers),
})
export class DocumentModule {}
