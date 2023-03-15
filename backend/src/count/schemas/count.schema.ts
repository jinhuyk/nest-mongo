import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountDocument = Count & Document;

@Schema()
export class Count{

  @Prop()
  name: string;

  @Prop()
  count: number;
}

export const CountSchema = SchemaFactory.createForClass(Count);