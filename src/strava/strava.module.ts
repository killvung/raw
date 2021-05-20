import { Module } from '@nestjs/common';
import { StravaController } from './strava.controller';
import { StravaService } from './strava.service';

@Module({
    imports: [],
    controllers: [StravaController],
    providers: [StravaService],
})
export class StravaModule { }
