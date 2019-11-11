import { Entity } from '@loopback/repository';
export declare class Clase extends Entity {
    id: string;
    name: string;
    students: string;
    weeks?: string[];
    constructor(data?: Partial<Clase>);
}
export interface ClaseRelations {
}
export declare type ClaseWithRelations = Clase & ClaseRelations;
