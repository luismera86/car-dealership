import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCarDto {

  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString() // Tienen que ser de tipo sting
  @IsOptional()
  readonly brand?: string;
  
  @IsString()
  @MinLength(3) // Tiene que tener un longitud mínima de 3 caracteres
  @IsOptional()
  readonly model?: string;
}