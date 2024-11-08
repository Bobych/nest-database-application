import { Module } from '@nestjs/common';
import { TypesService } from './types.service';
import { TypesController } from './types.controller';
import { TypesProviders } from './types.providers';

@Module({
  controllers: [TypesController],
  providers: [...TypesProviders, TypesService],
})
export class TypesModule {}
