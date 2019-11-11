import { DefaultCrudRepository } from '@loopback/repository';
import { Factura, FacturaRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare class FacturaRepository extends DefaultCrudRepository<Factura, typeof Factura.prototype._id, FacturaRelations> {
    constructor(dataSource: MongoConnDataSource);
}
