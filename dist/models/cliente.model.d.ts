import { Entity } from '@loopback/repository';
export declare class Cliente extends Entity {
    rfc: string;
    nombre: string;
    apellido: string;
    direccion: string;
    correo: string;
    contrasena: string;
    actaConstitutiva: string;
    estadoDeCuenta: string;
    role: string;
    constructor(data?: Partial<Cliente>);
}
export interface ClienteRelations {
}
export declare type ClienteWithRelations = Cliente & ClienteRelations;
