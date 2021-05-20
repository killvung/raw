import { Injectable } from '@nestjs/common';

@Injectable()
export class MapMyFitnessService {
    getHeartBeat(): string {
        return "Beat!";
    }
}
