import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DeliversModule } from './delivers/delivers.module';
import { TownsModule } from './towns/towns.module';
import { StatusesModule } from './statuses/statuses.module';
import { TypesModule } from './deliveryTypes/types.module';
import { DatabaseModule } from './.database/database.module';
import { DEVELOPMENT, PRODUCTION } from './.const';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV == PRODUCTION
          ? `.env.${PRODUCTION}`
          : `.env.${DEVELOPMENT}`,
    }),
    DatabaseModule.forRoot(),
    DeliversModule,
    TownsModule,
    StatusesModule,
    TypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
