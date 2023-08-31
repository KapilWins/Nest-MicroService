import { Body, Controller, Post } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @Post('create')
  async create(@Body() req) {
    return this.loggerService.log(req);
  }
}
