import { Entity } from '@loopback/repository';
export declare class Teacher extends Entity {
    _id: string;
    name: string;
    lastName: string;
    password: string;
    classes?: string[];
    constructor(data?: Partial<Teacher>);
}
export interface TeacherRelations {
}
export declare type TeacherWithRelations = Teacher & TeacherRelations;
