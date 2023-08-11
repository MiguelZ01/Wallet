import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: ['http://localhost:4200'],
    },
  });

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Wallet')
    .setDescription('The wallet API description')
    .setVersion('1.0')
    .addTag('wallet')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();