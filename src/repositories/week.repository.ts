import {DefaultCrudRepository} from '@loopback/repository';
import {Week, WeekRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class WeekRepository extends DefaultCrudRepository<
  Week,
  typeof Week.prototype._id,
  WeekRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Week, dataSource);
  }
}
