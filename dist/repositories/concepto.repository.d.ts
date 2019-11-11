import { DefaultCrudRepository } from '@loopback/repository';
import { Concepto, ConceptoRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare class ConceptoRepository extends DefaultCrudRepository<Concepto, typeof Concepto.prototype.id, ConceptoRelations> {
    constructor(dataSource: MongoConnDataSource);
}
