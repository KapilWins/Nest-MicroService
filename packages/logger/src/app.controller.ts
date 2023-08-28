import { Controller } from '@nestjs/common';
import { LoggerService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class LoggerController {
  constructor(private readonly loggerService: LoggerService) {}

  @EventPattern('log_created')
  async log(message: string) {
    console.log('skjhgf');
    return this.loggerService.log(message);
  }
}
