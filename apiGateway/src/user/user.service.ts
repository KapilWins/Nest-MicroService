import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('user_queue') private readonly userClient: ClientProxy) {}

  async create(req) {
    try {
      //Sending request to the user's microservice
      return this.userClient.send('create', req);
    } catch (error) {
      throw error;
    }
  }

  async getById(_id: string) {
    try {
      return await this.userClient.send('get', _id);
    } catch (error) {
      throw error;
    }
  }
}
