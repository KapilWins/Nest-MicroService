import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('product_queue') private readonly clientOrderApp: ClientProxy,
  ) {}
  getHello(req) {
    return this.clientOrderApp.send(req.endPoint, req);
  }
}
