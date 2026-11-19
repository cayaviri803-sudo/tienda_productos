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
  tiendaAbierta: boolean = false;
  categorias: string[] = ['Electrónica', 'Accesorios', 'Hogar'];

  producto: Producto = {
    nombre: 'Smartphone Galaxy A55',
    precio: 2450,
    disponible: false,
  };
}