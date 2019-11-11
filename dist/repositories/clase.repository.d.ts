import { DefaultCrudRepository } from '@loopback/repository';
import { Clase, ClaseRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare class ClaseRepository extends DefaultCrudRepository<Clase, typeof Clase.prototype.id, ClaseRelations> {
    constructor(dataSource: MongoConnDataSource);
}
