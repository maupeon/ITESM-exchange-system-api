import {DefaultCrudRepository} from '@loopback/repository';
import {Factura, FacturaRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class FacturaRepository extends DefaultCrudRepository<
  Factura,
  typeof Factura.prototype._id,
  FacturaRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Factura, dataSource);
  }
}
