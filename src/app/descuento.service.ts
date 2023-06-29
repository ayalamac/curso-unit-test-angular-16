import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DescuentoService {

  constructor() { }

  calcularDescuento(valorCompra: number): number {

    if (valorCompra < 0) {
      throw new Error('El valor de compra debe ser un número mayor a cero.');
    }

    if (typeof valorCompra !== 'number') {
      throw new Error('El valor de compra debe ser un número mayor a cero.');
    }

    if (valorCompra > 80 && valorCompra <= 140) {
      return valorCompra * 0.05;
    }
    if (valorCompra > 140 && valorCompra <= 200) {
      return valorCompra * 0.08;
    }
    if (valorCompra > 200) {
      return valorCompra * 0.1;
    }
    return 0;
  }
}
