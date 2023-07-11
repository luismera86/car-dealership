import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';

@Module({
  imports: [CarsModule, BrandsModule], // Se importan los módulos que se van a utilizar
  controllers: [], // Se importan los controladores que se van a utilizar
  providers: [], // Se importan los servicios que se van a utilizar
})
export class AppModule {}
