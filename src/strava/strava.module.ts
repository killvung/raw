import { Module, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { StravaController } from './strava.controller';
import { StravaService } from './strava.service';

@Module({
    imports: [],
    controllers: [StravaController],
    providers: [StravaService],
})
export class StravaModule {
    constructor(private configService: ConfigService) {
        Logger.log(`APP__APP_ENV: ${configService.get("APP__APP_ENV")}`)
        Logger.log(`FOO: ${configService.get("FOO")}`)
        Logger.log(`STAGE: ${configService.get("STAGE")}`)
    }
}
