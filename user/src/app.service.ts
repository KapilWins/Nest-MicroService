import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private httpService: HttpService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = new this.userModel(createUserDto);
      return user.save();
    } catch (error) {
      throw error;
    }
  }

  async findOne(attribute: object) {
    try {
      const user = await this.userModel.findById(attribute).lean();
      return user;
    } catch (error) {
      throw error;
    }
  }
}
