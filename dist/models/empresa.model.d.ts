import { Entity } from '@loopback/repository';
export declare class Empresa extends Entity {
    rfc: string;
    nombre: string;
    razon_social: string;
    direccion: string;
    correo: string;
    contrasena: string;
    actaConstitutiva: string;
    estadoDeCuenta: string;
    role: string;
    cliente: string[];
    constructor(data?: Partial<Empresa>);
}
export interface EmpresaRelations {
}
export declare type EmpresaWithRelations = Empresa & EmpresaRelations;
