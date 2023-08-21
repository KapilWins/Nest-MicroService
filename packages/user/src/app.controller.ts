import { Controller } from '@nestjs/common';
import { UserService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @EventPattern('create_user')
  async create(data) {
    return await this.userService.create(data);
  }

  @EventPattern('get_user')
  async get(attribute) {
    return await this.userService.findOne(attribute);
  }
}
