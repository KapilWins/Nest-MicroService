import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LoggerService {
  constructor(
    @Inject('logger_queue') private readonly loggerClient: ClientProxy,
  ) {}

  async log(req) {
    try {
      //Sending request to the user's microservice
      return this.loggerClient.emit('Log_created', req);
    } catch (error) {
      throw error;
    }
  }

  async error(req) {
    try {
      //Sending request to the user's microservice
      return this.loggerClient.emit('Log_created', req);
    } catch (error) {
      throw error;
    }
  }
}
