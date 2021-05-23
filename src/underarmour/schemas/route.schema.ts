import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RouteDocument = Route & Document;

@Schema({ strict: false })
export class Route {}

export const RouteSchema = SchemaFactory.createForClass(Route);
