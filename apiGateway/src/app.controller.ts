import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('user')
  getHello(@Body() req) {
    return this.appService.getHello(req);
  }
}
