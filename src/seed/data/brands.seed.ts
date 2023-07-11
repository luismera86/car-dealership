import { Brand } from "src/brands/entities/brand.entity";
import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: "Honda",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Toyota",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Ford",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Chevrolet",
    createAt: new Date().getTime()
  },
  {
    id: uuid(),
    name: "Nissan",
    createAt: new Date().getTime()
  },

]