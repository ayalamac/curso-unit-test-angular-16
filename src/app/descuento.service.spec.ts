import { TestBed } from '@angular/core/testing';

import { DescuentoService } from './descuento.service';

describe('DescuentoService', () => {
  let service: DescuentoService;

  beforeEach(() => {
    service = TestBed.inject(DescuentoService);
  });

  it('DEBE Retornar descuento cero (0) SI el valor ingresado no es mayor que 80. (80)', () => {
    const valorCompra = 80;
    const descuento = service.calcularDescuento(valorCompra);
    expect(descuento).toBe(0);
  })

  it('DEBE Retornar descuento del 5% (5) SI el valor ingresado está en el rango de mayor a 80 y hasta 140. (100)', () => {
    const valorCompra = 100;
    const descuento = service.calcularDescuento(valorCompra);
    expect(descuento).toBe(5);
  })

  it('DEBE Retornar descuento del 8% (150) SI el valor ingresado está en el rango de mayor a 140 y hasta 200. (150)', () => {
    const valorCompra = 150;
    const descuento = service.calcularDescuento(valorCompra);
    expect(descuento).toBe(12);
  })

  it('DEBE Retornar descuento del 10% (25) SI el valor ingresado es mayor a 200. (250)', () => {
    const valorCompra = 250;
    const descuento = service.calcularDescuento(valorCompra);
    expect(descuento).toBe(25);
  })

  it('DEBE lanzar error SI el valor ingresado es menor a 0', () => {
    const valorCompra = -1;
    expect(() => service.calcularDescuento(valorCompra)).toThrowError('El valor de compra debe ser un número mayor a cero.');
  })

});
