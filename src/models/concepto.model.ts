import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Concepto extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    required: true,
  })
  precio_unitario: number;

  @property({
    type: 'number',
    required: true,
  })
  importe: number;


  constructor(data?: Partial<Concepto>) {
    super(data);
  }
}

export interface ConceptoRelations {
  // describe navigational properties here
}

export type ConceptoWithRelations = Concepto & ConceptoRelations;
