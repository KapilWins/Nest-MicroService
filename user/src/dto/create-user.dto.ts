import { Prop } from '@nestjs/mongoose';

export class CreateUserDto {
  @Prop()
  _id?: string;

  @Prop()
  name: string;

  @Prop()
  description: string;
}
