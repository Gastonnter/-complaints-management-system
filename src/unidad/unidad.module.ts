import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadService } from './unidad.service';
import { UnidadController } from './unidad.controller';
import { Unidad } from './entities/unidad.entity';
@Module({
  imports:[
    TypeOrmModule.forFeature([Unidad])
  ],
  controllers: [UnidadController],
  providers: [UnidadService],
  exports: [UnidadService]
})
export class UnidadModule {}
