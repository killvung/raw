import { Controller, Get, Logger, Post, Res, HttpStatus } from '@nestjs/common';
import { StravaService } from './strava.service';
import { Response } from 'express';

@Controller("/strava")
export class StravaController {
    constructor(private readonly stravaService: StravaService) { }

    @Get("/")
    getHeartBeat(): string {
        return this.stravaService.getHeartBeat();
    }

    @Post("/sync/activities")
    syncStravaActivities(@Res() res: Response) {
        return this.stravaService.getStravaActivities(async (error, activities) => {
            if (error) {
                Logger.error(error)
            } else {
                const { upsertedCount, modifiedCount } =
                    await this.stravaService.upsertStravaActivities(activities);
                res.status(HttpStatus.CREATED).send({ upsertedCount, modifiedCount });
            }
        });
    }
}
