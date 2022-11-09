import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('bootstrapping');
  await new Promise((res) => {
    setTimeout(() => res(1), 2000);
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
