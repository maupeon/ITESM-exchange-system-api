import {DefaultCrudRepository} from '@loopback/repository';
import {Teacher, TeacherRelations} from '../models';
import {MongoConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export type CredentialsTeacher = {
  _id: string;
  password: string;
}

export class TeacherRepository extends DefaultCrudRepository<
  Teacher,
  typeof Teacher.prototype._id,
  TeacherRelations
> {
  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
  ) {
    super(Teacher, dataSource);
  }
}
