import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
  @IsString() // Tienen que ser de tipo sting
  readonly brand: string;
  
  @IsString()
  @MinLength(3) // Tiene que tener un longitud mínima de 3 caracteres
  readonly model: string;
}