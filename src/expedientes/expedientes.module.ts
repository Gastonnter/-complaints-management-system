import { Module } from '@nestjs/common';
import { ExpedientesService } from './expedientes.service';
import { ExpedientesController } from './expedientes.controller';

@Module({
  controllers: [ExpedientesController],
  providers: [ExpedientesService],
  exports: [ ExpedientesService ]
})
export class ExpedientesModule {}
