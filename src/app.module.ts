import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StravaModule } from './strava/strava.module';
import { MapMyFitnessModule } from './mapmyfitness/mapmyfitness.module';

@Module({
  imports: [StravaModule, MapMyFitnessModule, ConfigModule.forRoot({
    isGlobal: true,
    ignoreEnvFile: process.env['APP__APP_ENV'] === "prod"
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
