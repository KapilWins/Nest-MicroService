import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { LoggerService } from './app.service';
import { LoggerController } from './app.controller';
import { WinstonModule } from 'nest-winston';

@Module({
  imports: [ConfigModule.forRoot(), WinstonModule.forRoot({}), HttpModule],
  controllers: [LoggerController],
  providers: [LoggerService],
})
export class AppModule {}
