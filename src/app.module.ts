import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { StravaModule } from './strava/strava.module';
import { MapMyFitnessModule } from './mapmyfitness/mapmyfitness.module';

@Module({
  imports: [StravaModule, MapMyFitnessModule, ConfigModule.forRoot({
    isGlobal: true,
    ignoreEnvFile: process.env['APP__APP_ENV'] === "prod"
  }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get('APP__MONGODB_URL'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
