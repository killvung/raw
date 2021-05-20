import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StravaModule } from './strava/strava.module';
import { MapMyFitnessModule } from './mapmyfitness/mapmyfitness.module';

@Module({
  imports: [StravaModule, MapMyFitnessModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
