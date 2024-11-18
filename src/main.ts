import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const PORT = process.env.PORT || 7777;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Delivery API')
    .setDescription(`Database labs 7 semester "Delivery" API`)
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

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
