import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { Product, ProductSchema } from './entities/product.entity';
import { ProductService } from './app.service';
import { ProductController } from './app.controller';
import * as Joi from 'joi';
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGO_URI: Joi.string().required(),
      }),
      envFilePath: '.env',
    }),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
