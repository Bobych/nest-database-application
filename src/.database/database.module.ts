import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import {
  SEQUELIZE,
  POSTGRES_DATABASE,
  POSTGRES_HOST,
  POSTGRES_DIALECT,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USERNAME,
} from '../.const';
import { Delivers } from '../delivers/entities/deliver.entity';
import { Types } from '../deliveryTypes/entities/type.entity';
import { Statuses } from '../statuses/entities/status.entity';
import { Towns } from '../towns/entites/town.entity';

@Module({
  imports: [ConfigModule],
})
export class DatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: SequelizeModule,
      providers: [
        {
          provide: SEQUELIZE,
          useFactory: async (configService: ConfigService) => {
            const config = {
              username: configService.get(POSTGRES_USERNAME),
              password: configService.get(POSTGRES_PASSWORD),
              database: configService.get(POSTGRES_DATABASE),
              host: configService.get(POSTGRES_HOST),
              port: configService.get(POSTGRES_PORT),
              dialect: configService.get(POSTGRES_DIALECT),
            };
            const sequelize = new Sequelize(config);
            sequelize.addModels([Delivers, Types, Statuses, Towns]);
            await sequelize.sync();
            return sequelize;
          },
          inject: [ConfigService],
        },
      ],
      exports: [SEQUELIZE],
    };
  }
}
