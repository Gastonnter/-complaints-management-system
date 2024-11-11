import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateExpedienteDto } from './dto/create-expediente.dto';
import { UpdateExpedienteDto } from './dto/update-expediente.dto';
import { Expediente } from './entities/expediente.entity';

@Injectable()
export class ExpedientesService {
    constructor(
      @InjectRepository(Expediente) private expedienteRepository: Repository <Expediente>
    ){}
  

  create(createExpedienteDto: CreateExpedienteDto) {
    return this.expedienteRepository.save(createExpedienteDto)
    
  }

  findAll() {
    return this.expedienteRepository.find({
      order:{ unidad_id: 'ASC'}
    })  }

  findOne(id: string) {
    return this.expedienteRepository.findOneBy({id})
  }

  update(id: string, updateExpedienteDto: UpdateExpedienteDto) {
   const expediente = this.expedienteRepository.findOneBy({id})
   return this.expedienteRepository.save({...expediente,...updateExpedienteDto})
  }

  remove(id: string) {
 return this.expedienteRepository.delete({id})
  }
  fillExpedientesWhithSeedData(expedientes:Expediente[]){
   return this.expedienteRepository.save(expedientes)
  }
}
