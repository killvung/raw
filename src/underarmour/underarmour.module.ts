import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { UnderArmourController } from './underarmour.controller';
import { UnderArmourService } from './underarmour.service';

import { Route, RouteSchema } from './schemas/route.schema';
import { Workout, WorkoutSchema } from './schemas/workout.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }, { name: Workout.name, schema: WorkoutSchema }])],
    controllers: [UnderArmourController],
    providers: [UnderArmourService],
})
export class UnderArmourModule { }
