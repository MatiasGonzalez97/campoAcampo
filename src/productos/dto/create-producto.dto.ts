import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  MaxLength,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  precio: number;
}
