import { STATUS_REPOSITORY } from 'src/.const';
import { Statuses } from './entities/status.entity';

export const StatusesProviders = [
  {
    provide: STATUS_REPOSITORY,
    useValue: Statuses,
  },
];
