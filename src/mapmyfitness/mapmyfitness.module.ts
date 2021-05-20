import { Module } from '@nestjs/common';
import { MapMyFitnessController } from './mapmyfitness.controller';
import { MapMyFitnessService } from './mapmyfitness.service';

@Module({
    imports: [],
    controllers: [MapMyFitnessController],
    providers: [MapMyFitnessService],
})
export class MapMyFitnessModule { }
