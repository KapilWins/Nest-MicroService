import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';

@Module({})
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'logger_queue',
        transport: Transport.NATS,
        // options: {
        //   servers: [process.env.NATS_URI],
        // },
      },
    ]),
  ],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class LoggerModule {}
