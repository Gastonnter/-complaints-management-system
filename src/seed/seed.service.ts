import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { EXPEDIENTES_SEED } from './data/expedientes.seed';
import { CarsService } from '../cars/cars.service';
import { ExpedientesService } from '../expedientes/expedientes.service';
import { UnidadService } from 'src/unidad/unidad.service';
import { UNIDAD_SEED } from './data/unidad.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService,
    private readonly expedienteService: ExpedientesService,
    private readonly unidadService: UnidadService,
  ){}
  populateDB (){

    this.carsService.fillCarsWhithSeedData(CARS_SEED);
    this.expedienteService.fillExpedientesWhithSeedData(EXPEDIENTES_SEED);
    this.unidadService.fillUnidadWhithSeedData(UNIDAD_SEED)
    return `Seed Executed Successfully`
  }
}
