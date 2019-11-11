import {DefaultCrudRepository} from '@loopback/repository';
import {Clase, ClaseRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClaseRepository extends DefaultCrudRepository<
  Clase,
  typeof Clase.prototype.id,
  ClaseRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Clase, dataSource);
  }
}
