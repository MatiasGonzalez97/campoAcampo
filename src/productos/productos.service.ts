import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productoRepo: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    const products = await this.productoRepo.find();
    console.log(products);
    return products;
  }

  findOne(id: number): Promise<Producto | null> {
    return this.productoRepo.findOneBy({ id });
  }

  async create(data: CreateProductoDto): Promise<Producto> {
    const nuevo = this.productoRepo.create(data);
    return this.productoRepo.save(nuevo);
  }

  async update(id: number, data: Partial<Producto>): Promise<Producto> {
    const producto = await this.productoRepo.findOneBy({ id });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    this.productoRepo.merge(producto, data);
    return this.productoRepo.save(producto);
  }

  async delete(id: number) {
    const result = await this.productoRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Producto no encontrado');
    }
    return { message: 'Producto eliminado' };
  }
}
