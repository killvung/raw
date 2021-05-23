import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { UnderArmourController } from './underarmour.controller';
import { UnderArmourService } from './underarmour.service';

import { Route, RouteSchema } from './schemas/route.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }])],
    controllers: [UnderArmourController],
    providers: [UnderArmourService],
})
export class UnderArmourModule { }
