import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';

@Schema()
export class User {
  @Prop({ default: () => nanoid() })
  _id: string;

  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
