import { Model } from 'mongoose';
import { BulkWriteOpResultObject } from 'mongodb';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Activity, ActivityDocument } from './schemas/activity.schema';
import { ConfigService } from '@nestjs/config';

import * as StravaApiV3 from 'strava_api_v3';

@Injectable()
export class StravaService {
    constructor(
        @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>,
        private configService: ConfigService
    ) {
        const defaultClient = StravaApiV3.ApiClient.instance;
        const strava_oauth = defaultClient.authentications['strava_oauth'];
        strava_oauth.accessToken = configService.get("APP__STRAVA_ACCESS_TOKEN")
    }

    async findAll(): Promise<Activity[]> {
        return this.activityModel.find().exec();
    }

    getHeartBeat(): string {
        return "Beat!";
    }

    getStravaActivities(callback) {
        new StravaApiV3
            .ActivitiesApi()
            .getLoggedInAthleteActivities({ "perPage": 200 }, callback);
    };

    async upsertStravaActivities(activities: any[]): Promise<BulkWriteOpResultObject> {
        const bulkWriteActivities = activities.map(activity => ({
            updateOne: {
                filter: { id: activity.id },
                update: { ...activity },
                upsert: true
            }
        }));
        const res = this.activityModel.bulkWrite(bulkWriteActivities);
        return res;
    }

}
