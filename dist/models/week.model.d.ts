import { Entity } from '@loopback/repository';
export declare class Week extends Entity {
    _id: string;
    clase: string;
    grades?: object[];
    constructor(data?: Partial<Week>);
}
export interface WeekRelations {
}
export declare type WeekWithRelations = Week & WeekRelations;
