import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Factura extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  proveedor: string;

  @property({
    type: 'string',
    required: true,
  })
  cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion_proveedor: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  rfc_cliente: string;

  @property({
    type: 'string',
    required: true,
  })
  rfc_proveedor: string;

  @property({
    type: 'string',
    required: true,
  })
  fecha: string;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  concepto: object[];

  @property({
    type: 'number',
    required: true,
  })
  impuesto: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
    required: true,
  })
  firmaDigital: string;

  @property({
    type: 'string',
    required: true,
  })
  selloDigital: string;

  @property({
    type: 'string',
    required: true,
  })
  estatus: string;


  constructor(data?: Partial<Factura>) {
    super(data);
  }
}

export interface FacturaRelations {
  // describe navigational properties here
}

export type FacturaWithRelations = Factura & FacturaRelations;
