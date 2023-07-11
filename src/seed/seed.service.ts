import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BRANDS_SEED, CARS_SEED } from './data';
import { BrandsService } from 'src/brands/brands.service';


@Injectable()
export class SeedService {
  constructor(
    private readonly cardService: CarsService,
    private readonly brandsServices: BrandsService
  ) {}
  
  populateDB() {
    
    this.cardService.fillCarsWithSeedData(CARS_SEED);
    this.brandsServices.fillBrandsWithSeedData(BRANDS_SEED);
    return "Seed successful"

  }

}
