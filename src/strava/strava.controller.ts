import { Controller, Get } from '@nestjs/common';
import { StravaService } from './strava.service';

@Controller("/strava")
export class StravaController {
    constructor(private readonly stravaService: StravaService) { }

    @Get("/")
    getHeartBeat(): string {
        return this.stravaService.getHeartBeat();
    }
}
