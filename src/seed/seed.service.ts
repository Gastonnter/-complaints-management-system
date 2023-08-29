import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';


@Injectable()
export class SeedService {
  populateDB (){

  
    return `Seed Executed Successfully`
  }
}
