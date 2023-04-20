export interface Empleado {
    id?: number;
    nroDocumento: bigint;
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    fechaIngreso: Date;
    fechaCreacion?: Date;
  }
