import { DELIVERY_REPOSITORY } from 'src/.const';
import { Delivers } from './entities/deliver.entity';

export const DeliveryProviders = [
  {
    provide: DELIVERY_REPOSITORY,
    useValue: Delivers,
  },
];
