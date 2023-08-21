import { Controller } from '@nestjs/common';
import { ProductService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('create')
  create(req) {
    return this.productService.create(req);
  }

  @EventPattern('get')
  async get(req) {
    return await this.productService.get(req);
  }
}
