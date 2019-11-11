import { DefaultCrudRepository } from '@loopback/repository';
import { Week, WeekRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare class WeekRepository extends DefaultCrudRepository<Week, typeof Week.prototype._id, WeekRelations> {
    constructor(dataSource: MongoConnDataSource);
}
