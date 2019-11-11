import {DefaultCrudRepository} from '@loopback/repository';
import {Cliente, ClienteRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export type CredentialsCliente = {
  correo: string;
  contrasena: string;
}

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.rfc,
  ClienteRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
