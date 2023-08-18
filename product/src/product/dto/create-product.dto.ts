import { Prop } from '@nestjs/mongoose';

export class CreateProductDto {
  @Prop()
  name: string;

  @Prop()
  description: string;
}
