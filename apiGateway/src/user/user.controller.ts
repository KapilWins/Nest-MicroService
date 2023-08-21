import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() req) {
    return this.userService.create(req);
  }

  @Get(':_id')
  async getById(@Param() _id: string) {
    return await this.userService.getById(_id);
  }
}
