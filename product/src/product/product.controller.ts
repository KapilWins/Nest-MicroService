import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('product/')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('create')
  create(req) {
    return this.productService.create(req);
  }

  @MessagePattern('get')
  async get(req) {
    return await this.productService.get(req);
  }
}
