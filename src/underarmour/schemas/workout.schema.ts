import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WorkoutDocument = Workout & Document;

@Schema({ strict: false })
export class Workout { }

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
