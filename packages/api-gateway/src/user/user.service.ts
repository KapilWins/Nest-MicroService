import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { LoggerService } from 'src/logger/logger.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('user_queue') private readonly userClient: ClientProxy,
    private readonly loggerService: LoggerService,
  ) {}

  async create(req) {
    try {
      //Sending request to the user's microservice
      await this.loggerService.create('Inside user create service');
      return this.userClient.send('create_user', req);
    } catch (error) {
      throw error;
    }
  }

  async getById(_id: string) {
    try {
      const rsp = await this.userClient.send('get_user', _id);
      const user = await lastValueFrom(rsp);
      return user;
    } catch (error) {
      return error;
    }
  }
}
