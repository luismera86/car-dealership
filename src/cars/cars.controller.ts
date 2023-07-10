import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ) { }

  @Get()
  getAllCars(): object[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  getOneCar(@Param("id", new ParseUUIDPipe({ version: "4" })) id: string) {
    // ParseUUIDPipe lo que hace es verificar que el id ingresado sea del tipo UUID
    // new ParseUUIDPipe({version: "4"}) lo que hace es verificar que el id ingresado sea del tipo UUID v4
    // ParsiIntPipe lo que hace es transformar el parámetro en número
    return this.carsService.findById(id);
  }

  @Post()
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.create(body);
  }

  @Put(":id")
  updateCar(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() body: UpdateCarDto) {
    return this.carsService.update(id, body);
  }

  @Delete(":id")
  deleteCar(@Param("id", ParseUUIDPipe) id: string) {
    return this.carsService.delete(id);
  }
}

