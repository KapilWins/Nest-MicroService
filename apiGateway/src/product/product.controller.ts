import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  async create(@Body() req) {
    return this.productService.create(req);
  }

  @Get(':_id')
  async getById(@Param() _id: string) {
    return await this.productService.getById(_id);
  }
}
