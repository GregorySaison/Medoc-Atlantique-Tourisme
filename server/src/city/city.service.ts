import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './city.model';

@Injectable()
export class CityService {
    constructor(
        @InjectModel(City)
        private cityModel: typeof City,
    ) {}

    async findAll(): Promise<City[]> {
        return this.cityModel.findAll();
    }
}