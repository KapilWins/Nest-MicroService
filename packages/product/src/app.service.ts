import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async create(data: CreateProductDto): Promise<Product> {
    try {
      const product = new this.productModel(data);

      return product.save();
    } catch (err) {
      throw err;
    }
  }

  async get(attribute: object) {
    try {
      const product = await this.productModel.findOne(attribute).lean();
      if (!product) {
        throw new RpcException({
          message: 'User not found !',
          status: HttpStatus.NOT_FOUND,
        });
      }
      return product;
    } catch (err) {
      throw err;
    }
  }
}
