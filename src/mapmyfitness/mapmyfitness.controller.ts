import { Controller, Get } from '@nestjs/common';
import { MapMyFitnessService } from './mapmyfitness.service';

@Controller("/mapmyfitness")
export class MapMyFitnessController {
    constructor(private readonly mapmyfitnessService: MapMyFitnessService) { }

    @Get("/")
    getHeartBeat(): string {
        return this.mapmyfitnessService.getHeartBeat();
    }
}
