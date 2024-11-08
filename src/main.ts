import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.PORT || 7777;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log('Server starts on port ' + PORT));

  const POSTGRES_HOST = process.env.POSTGRES_HOST;
  const POSTGRES_PORT = process.env.POSTGRES_PORT;
  const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
  const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME;
  const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
  console.log(
    'DB connection: ' +
      POSTGRES_DATABASE +
      '://' +
      POSTGRES_USERNAME +
      ':' +
      POSTGRES_PASSWORD +
      '@' +
      POSTGRES_HOST +
      ':' +
      POSTGRES_PORT,
  );
}
bootstrap();
