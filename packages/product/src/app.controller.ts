import { Controller } from '@nestjs/common';
import { ProductService } from './app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('create_product')
  create(req) {
    return this.productService.create(req);
  }

  @EventPattern('get_product')
  async get(req) {
    return await this.productService.get(req);
  }
}
