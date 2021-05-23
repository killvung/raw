import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema({
    strict: false
})
export class Activity {}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
