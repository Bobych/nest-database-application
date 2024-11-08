import { Module } from '@nestjs/common';
import { TownService } from './towns.service';
import { TownController } from './towns.controller';
import { TownsProviders } from './towns.providers';

@Module({
  controllers: [TownController],
  providers: [...TownsProviders, TownService],
})
export class TownsModule {}
