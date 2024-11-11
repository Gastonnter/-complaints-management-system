import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUnidadDto } from './dto/create-unidad.dto';
import { UpdateUnidadDto } from './dto/update-unidad.dto';
import { Unidad } from './entities/unidad.entity';
import { v4 as uuid } from 'uuid';



@Injectable()
export class UnidadService {
 constructor(
  @InjectRepository(Unidad) private unidadRepository: Repository<Unidad>
 ){}



  create(createUnidadDto: CreateUnidadDto) {
    return this.unidadRepository.save(createUnidadDto);
  }

  async findAll() {
    return await this.unidadRepository.find({
      order: { numero: 'ASC' },
    });
  }

  findOne(id: string) {
    return this.unidadRepository.findOneBy({id}) ;
  }

 async update(id: string, updateUnidadDto: UpdateUnidadDto){    
    const unidad = await this.unidadRepository.findOneBy({id})
    return this.unidadRepository.save({...unidad,...updateUnidadDto});
}

  remove(id: string) {
    return this.unidadRepository.delete({id});
  }
  fillUnidadWhithSeedData(unidad:Unidad[]){
   return this.unidadRepository.save(unidad)
  }
}
