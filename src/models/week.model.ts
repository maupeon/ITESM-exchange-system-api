import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Week extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  _id: string;

  @property({
    type: 'string',
    required: true,
  })
  clase: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  grades?: object[];


  constructor(data?: Partial<Week>) {
    super(data);
  }
}

export interface WeekRelations {
  // describe navigational properties here
}

export type WeekWithRelations = Week & WeekRelations;
