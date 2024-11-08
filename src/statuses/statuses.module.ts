import { Module } from '@nestjs/common';
import { StatusesService } from './statuses.service';
import { StatusesProviders } from './statuses.providers';
import { StatusesController } from './statuses.controller';

@Module({
  controllers: [StatusesController],
  providers: [...StatusesProviders, StatusesService],
})
export class StatusesModule {}
