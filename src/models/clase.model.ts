import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Clase extends Entity {
  @property({
    type: 'string',
    id: true,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  students: string;

  @property({
    type: 'array',
    itemType: 'string',
  })
  weeks?: string[];


  constructor(data?: Partial<Clase>) {
    super(data);
  }
}

export interface ClaseRelations {
  // describe navigational properties here
}

export type ClaseWithRelations = Clase & ClaseRelations;
