import { Module } from "@nestjs/common";
import { SequelizeModule } from '@nestjs/sequelize';
import { City } from "./city.model";
import { CityController } from './city.controller';
import { CityService } from './city.service';

@Module({
    imports: [SequelizeModule.forFeature([City])],
    providers: [CityService],
    controllers: [CityController],
})

export class CityModule {}