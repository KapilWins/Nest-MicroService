import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './app.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: CreateUserDto): Promise<User> {
    return await this.userService.create(data);
  }
}
