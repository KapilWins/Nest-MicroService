import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'user_queue', transport: Transport.NATS },
      { name: 'product_queue', transport: Transport.NATS },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
