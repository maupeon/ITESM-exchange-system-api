import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Empresa extends Entity {
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
  razon_social: string;

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

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  cliente: string[];


  constructor(data?: Partial<Empresa>) {
    super(data);
  }
}

export interface EmpresaRelations {
  // describe navigational properties here
}

export type EmpresaWithRelations = Empresa & EmpresaRelations;
