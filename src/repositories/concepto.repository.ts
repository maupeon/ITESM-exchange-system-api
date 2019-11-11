import {DefaultCrudRepository} from '@loopback/repository';
import {Concepto, ConceptoRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ConceptoRepository extends DefaultCrudRepository<
  Concepto,
  typeof Concepto.prototype.id,
  ConceptoRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Concepto, dataSource);
  }
}
