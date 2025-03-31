import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Producto | null> {
    return this.productosService.findOne(id);
  }

  @Post()
  create(@Body() body: CreateProductoDto): Promise<Producto> {
    return this.productosService.create(body);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: Partial<Producto>,
  ): Promise<Producto> {
    return this.productosService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productosService.delete(id);
  }
}
