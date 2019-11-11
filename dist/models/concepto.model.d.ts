import { Entity } from '@loopback/repository';
export declare class Concepto extends Entity {
    id: number;
    nombre: string;
    cantidad: number;
    precio_unitario: number;
    importe: number;
    constructor(data?: Partial<Concepto>);
}
export interface ConceptoRelations {
}
export declare type ConceptoWithRelations = Concepto & ConceptoRelations;
