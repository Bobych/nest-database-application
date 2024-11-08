import { TYPE_REPOSITORY } from 'src/.const';
import { Types } from './entities/type.entity';

export const TypesProviders = [
  {
    provide: TYPE_REPOSITORY,
    useValue: Types,
  },
];
