import { TOWN_REPOSITORY } from 'src/.const';
import { Towns } from './entites/town.entity';

export const TownsProviders = [
  {
    provide: TOWN_REPOSITORY,
    useValue: Towns,
  },
];
