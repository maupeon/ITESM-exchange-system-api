import { DefaultCrudRepository } from '@loopback/repository';
import { Cliente, ClienteRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare type CredentialsCliente = {
    correo: string;
    contrasena: string;
};
export declare class ClienteRepository extends DefaultCrudRepository<Cliente, typeof Cliente.prototype.rfc, ClienteRelations> {
    constructor(dataSource: MongoConnDataSource);
}
