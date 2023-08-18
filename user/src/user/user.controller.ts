import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Controller('user')
export class UserController {
  private client: ClientProxy;
  constructor(private readonly userService: UserService) {
    this.client = ClientProxyFactory.create({
      transport: Transport.NATS,
      options: {
        servers: ['nats://localhost:4222'],
        queue: 'product_queue',
      },
    });
  }

  @Get()
  public hello() {
    return this.client.send('hello', 'hellowork');
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }
}
