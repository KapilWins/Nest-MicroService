import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@Inject('user_queue') private readonly userClient: ClientProxy) {}

  async create(req) {
    try {
      //Sending request to the user's microservice
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
