import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ActivityDocument = Activity & Document;

@Schema({
    strict: false
})
export class Activity {
    @Prop()
    id: number
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
