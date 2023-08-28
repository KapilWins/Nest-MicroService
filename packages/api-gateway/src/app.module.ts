import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [UserModule, LoggerModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
