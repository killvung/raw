import { Controller, Get, Logger, Post } from '@nestjs/common';
import { UnderArmourService } from './underarmour.service';

@Controller("/underarmour")
export class UnderArmourController {
    constructor(private readonly underarmourService: UnderArmourService) { }

    @Get("/")
    getHeartBeat(): string {
        return this.underarmourService.getHeartBeat();
    }

    @Post("/sync/routes")
    async syncMapMyFitnessRoutes() {
        const routes = await this.underarmourService.getRoutes();
        const { upsertedCount, modifiedCount } = await this.underarmourService.upsertRoutes(routes);
        return { upsertedCount, modifiedCount }
    }
}
