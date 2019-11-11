import { Entity } from '@loopback/repository';
export declare class Hola extends Entity {
    id: number;
    nombre: string;
    constructor(data?: Partial<Hola>);
}
export interface HolaRelations {
}
export declare type HolaWithRelations = Hola & HolaRelations;
