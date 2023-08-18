import { Prop } from '@nestjs/mongoose';

export class CreateUserDto {
  @Prop()
  name: string;

  @Prop()
  description: string;
}
