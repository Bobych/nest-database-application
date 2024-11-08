import { Module } from '@nestjs/common';
import { DeliversService } from './delivers.service';
import { DeliversController } from './delivers.controller';
import { DeliveryProviders } from './deliver.providers';

@Module({
  controllers: [DeliversController],
  providers: [...DeliveryProviders, DeliversService],
})
export class DeliversModule {}
