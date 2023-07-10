import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from "uuid"
import { CreateCarDto, UpdateCarDto } from './dto';


@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: "Toyota",
      model: "Corolla"
    },
    {
      id: uuid(),
      brand: "Honda",
      model: "Civic"
    },
    {
      id: uuid(),
      brand: "Ford",
      model: "Fiesta"
    }
  ]

  findAll() {
    return this.cars;
  }

  findById(id: string) {
    const car = this.cars.find(c => c.id === id);

    if (!car) throw new NotFoundException(`El auto con el id ${id} no fue encontrado`); // Maneja el error 404, entre () pasamos el mensaje del error

    return car;
  }

  create(createCartDto: CreateCarDto) {

    const newCar: Car = {
      id: uuid(),
      ...createCartDto
    }
    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, body: UpdateCarDto) {

    let carDb = this.findById(id);
    this.cars = this.cars.map(car => {
      if (car.id === id) {
        carDb = {
          ...car,
          ...body,
          id
        }
        return carDb
      }

      return car
    })

    return carDb;
  }

  delete(id: string) {
    const car = this.findById(id);
    this.cars = this.cars.filter(car => car.id !== id);

    return this.cars;
  }
}


