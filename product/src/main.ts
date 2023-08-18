import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';

const microservices: MicroserviceOptions = {
  transport: Transport.NATS,
  options: {
    servers: ['nats://localhost:4222'],
    queue: 'product_queue',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microservices,
  );
  await app.listen();
}
bootstrap();
