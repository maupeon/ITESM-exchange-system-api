import { DefaultCrudRepository } from '@loopback/repository';
import { Teacher, TeacherRelations } from '../models';
import { MongoConnDataSource } from '../datasources';
export declare type CredentialsTeacher = {
    _id: string;
    password: string;
};
export declare class TeacherRepository extends DefaultCrudRepository<Teacher, typeof Teacher.prototype._id, TeacherRelations> {
    constructor(dataSource: MongoConnDataSource);
}
