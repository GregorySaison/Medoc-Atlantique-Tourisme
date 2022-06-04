import { Controller, Get } from "@nestjs/common";
import { CityService } from "./city.service";
import { City } from "./city.model";

@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService) {}

    @Get()
    findAll(): Promise<City[]> {
        return this.cityService.findAll();
    }
}