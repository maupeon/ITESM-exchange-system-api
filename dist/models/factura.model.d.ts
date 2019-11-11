import { Entity } from '@loopback/repository';
export declare class Factura extends Entity {
    _id: string;
    proveedor: string;
    cliente: string;
    direccion_proveedor: string;
    direccion_cliente: string;
    rfc_cliente: string;
    rfc_proveedor: string;
    fecha: string;
    concepto: object[];
    impuesto: number;
    total: number;
    firmaDigital: string;
    selloDigital: string;
    estatus: string;
    constructor(data?: Partial<Factura>);
}
export interface FacturaRelations {
}
export declare type FacturaWithRelations = Factura & FacturaRelations;
