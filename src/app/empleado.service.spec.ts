import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EmpleadoService } from './empleado.service';

import { Empleado } from './empleado.model';
import { dummyEmpleados } from 'tests/dummies/empleados.dummy';

describe('EmpleadoService', () => {
  let service: EmpleadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmpleadoService]
    });
    service = TestBed.inject(EmpleadoService);
  });

  it('DEBE crear un nuevo empleado', () => {
    const nuevoEmpleadoDummy: Empleado = {
      apellido: 'Galeano',
      edad: 33,
      id: 4,
      nombre: 'Jeison',
      puesto: 'Desarrollador'
    };

    service.crearEmpleado(nuevoEmpleadoDummy)
      .subscribe((nuevoEmpleado: Empleado) => {
        expect(nuevoEmpleado).toEqual(nuevoEmpleadoDummy);
      });
  });

  it('DEBE retornar un array con empleados SI se ejecuta el método GET', () => {
    service.getEmpleados()
      .subscribe((empleadosRecibidos: Empleado[]) => {
        expect(empleadosRecibidos.length).toBeGreaterThan(0);
        expect(empleadosRecibidos).toEqual(dummyEmpleados);
    });
  });

  it('DEBE retornar un empleado por su ID (2)', () => {
    const id = 2;
    const empleadoDummy = dummyEmpleados.find((empleado) => empleado.id === id)!;

    service.getEmpleadoById(id)
      .subscribe((empleado: Empleado) => {
        expect(empleado).toEqual(empleadoDummy);
    });
  });
});
