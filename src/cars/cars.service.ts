import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './dtos/create-car-dto';
import { Car } from './interfaces/car.interfaces';
import { UpdateCarDto } from './dtos/update-car-dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // {
    //   id: uuid(),
    //   brand: 'toyota',
    //   model: 'corolla',
    // },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' no found`);
    return car;
  }
  create(createCarDto: CreateCarDto) {
    const car: Car = {
      id: uuid(), //...createCarDto;
      brand: createCarDto.brand,
      model: createCarDto.model,
    };
    this.cars.push(car);
    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.findOneById(id);
    if (updateCarDto.id && updateCarDto.id !== id)
      throw new BadRequestException(`Car id is not valid inside body`);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }

  delete(id: string) {
    const carDB = this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== carDB.id);
  }
}
