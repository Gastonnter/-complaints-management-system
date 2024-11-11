import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsModule } from './cars/cars.module';
import { ExpedientesModule } from './expedientes/expedientes.module';
import { SeedModule } from './seed/seed.module';
import { UnidadModule } from './unidad/unidad.module';
@Module({
  imports:  [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'gaston',
        password: 'postgres',
        database: 'my_db',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: false,
        retryDelay: 3000,
        retryAttempts: 10
      }),
    CarsModule, ExpedientesModule, SeedModule, UnidadModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
