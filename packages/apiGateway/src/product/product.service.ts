import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    @Inject('product_queue') private readonly productClient: ClientProxy,
  ) {}

  async create(req) {
    try {
      //Sending request to the product's microservice
      return this.productClient.send('create_product', req);
    } catch (error) {
      throw error;
    }
  }

  async getById(_id: string) {
    try {
      return await this.productClient.send('get_product', _id);
    } catch (error) {
      throw error;
    }
  }
}
