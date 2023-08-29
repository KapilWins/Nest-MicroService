import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'user_queue',
        transport: Transport.NATS,
        options: {
          servers: [process.env.NATS_URI ?? 'nats://localhost:4222'],
        },
      },
    ]),
    LoggerModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
