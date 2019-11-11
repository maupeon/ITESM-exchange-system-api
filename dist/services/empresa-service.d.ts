import { CredentialsTeacher, TeacherRepository } from '../repositories/teacher.repository';
import { Teacher } from '../models/teacher.model';
import { UserService, UserProfile } from '@loopback/authentication';
import { PasswordHasher } from './hash.password.bcryptjs';
export declare class MyUserService implements UserService<Teacher, CredentialsTeacher> {
    userRepository: TeacherRepository;
    passwordHasher: PasswordHasher;
    constructor(userRepository: TeacherRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: CredentialsTeacher): Promise<Teacher>;
    convertToUserProfile(user: Teacher): UserProfile;
}
