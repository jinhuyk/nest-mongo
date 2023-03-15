import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CountDocument = Count & Document;

@Schema()
export class Count{

  @Prop()
  catCount: number;
}

export const CountSchema = SchemaFactory.createForClass(Count);