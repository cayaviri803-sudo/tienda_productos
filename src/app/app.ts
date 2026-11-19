import { Component } from '@angular/core';

export interface Producto {
  nombre: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nombreTienda: string = 'Tienda Central';
  encargado: string = 'Cesar Ayaviri';
  numeroSucursal: number = 1;
  tiendaAbierta: boolean = true;
  categorias: string[] = ['Electrónica', 'Accesorios', 'Hogar', 'Oficina'];

  producto: Producto = {
    nombre: 'Mochila Antirrobo 15.6"',
    precio: 220,
    disponible: true,
  };
}