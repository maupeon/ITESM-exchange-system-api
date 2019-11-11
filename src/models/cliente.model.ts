import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Cliente extends Entity {

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  rfc: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  actaConstitutiva: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoDeCuenta: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
