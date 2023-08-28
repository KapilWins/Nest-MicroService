import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LoggerService {
  constructor(
    @Inject('logger_queue') private readonly loggerClient: ClientProxy,
  ) {}

  async log(req) {
    try {
      //Sending request to the logger's microservice
      return this.loggerClient.send('log_created', req);
    } catch (error) {
      throw error;
    }
  }
}
