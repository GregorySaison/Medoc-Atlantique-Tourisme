import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { CityModule } from './city/city.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'ledevnovice',
      password: '5djr2h3v',
      database: 'beach',
      autoLoadModels: true,
      synchronize: true,
    }),
    CityModule,
  ],
})
export class AppModule {}
