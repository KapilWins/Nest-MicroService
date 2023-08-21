import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    try {
      const product = new this.productModel(createProductDto);

      return product.save();
    } catch (err) {
      throw err;
    }
  }

  async get(attribute: object) {
    try {
      const product = await this.productModel.findOne(attribute).lean();
      return product;
    } catch (err) {
      throw err;
    }
  }
}
