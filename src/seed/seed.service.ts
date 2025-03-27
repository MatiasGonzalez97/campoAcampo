import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../productos/entities/producto.entity';

@Injectable()
export class SeedService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  async onApplicationBootstrap() {
    const count = await this.productoRepo.count();
    if (count === 0) {
      await this.productoRepo.insert([
        {
          nombre: 'Alimento balanceado para bovinos',
          descripcion:
            'Bolsa de 40kg con nutrientes esenciales para el engorde de ganado.',
          precio: 28500,
        },
        {
          nombre: 'Suplemento mineral',
          descripcion:
            'Mezcla mineral para mejorar la salud y productividad del ganado.',
          precio: 15750,
        },
        {
          nombre: 'Vacuna contra fiebre aftosa',
          descripcion: 'Dosis individual para bovinos, con certificado SENASA.',
          precio: 3900,
        },
        {
          nombre: 'Bebedero automático',
          descripcion: 'Bebedero de acero galvanizado para ganado.',
          precio: 12000,
        },
        {
          nombre: 'Comedero plástico reforzado',
          descripcion: 'Comedero resistente de 80 litros, ideal para pasturas.',
          precio: 65000,
        },
        {
          nombre: 'Antibiótico de amplio espectro',
          descripcion:
            'Frasco de 100ml para tratamiento de infecciones comunes.',
          precio: 42000.3,
        },
        {
          nombre: 'Soga para manejo de animales',
          descripcion: 'Soga de nylon trenzado de 10 metros.',
          precio: 9500,
        },
        {
          nombre: 'Guantes',
          descripcion: 'Caja de 100 guantes desechables de uso veterinario.',
          precio: 18999,
        },
        {
          nombre: 'Identificadores auriculares',
          descripcion:
            'Pack de 50 aretes numerados para identificación bovina.',
          precio: 25699,
        },
        {
          nombre: 'Pala',
          descripcion: 'Pala metálica reforzada con mango de madera.',
          precio: 22755,
        },
      ]);
      console.log('Productos de prueba insertados automáticamente');
    }
  }
}
