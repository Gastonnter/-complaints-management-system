import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from 'src/cars/cars.module';
import { ExpedientesModule } from 'src/expedientes/expedientes.module';
import { UnidadModule } from 'src/unidad/unidad.module';
@Module({
  controllers: [ SeedController ],
  providers: [ SeedService ],
  imports: [ CarsModule, ExpedientesModule,UnidadModule]
})
export class SeedModule {}
