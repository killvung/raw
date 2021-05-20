import { Injectable } from '@nestjs/common';

@Injectable()
export class StravaService {
    getHeartBeat(): string {
        return "Beat!";
    }
}
