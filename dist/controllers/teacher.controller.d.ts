import { Count, Filter, Where } from '@loopback/repository';
import { Teacher } from '../models';
import { TeacherRepository } from '../repositories';
import { UserProfile, TokenService, UserService } from '@loopback/authentication';
import { CredentialsTeacher } from '../repositories/teacher.repository';
import { PasswordHasher } from '../services/hash.password.bcryptjs';
export declare class TeacherController {
    userRepository: TeacherRepository;
    passwordHasher: PasswordHasher;
    jwtService: TokenService;
    userService: UserService<Teacher, CredentialsTeacher>;
    constructor(userRepository: TeacherRepository, passwordHasher: PasswordHasher, jwtService: TokenService, userService: UserService<Teacher, CredentialsTeacher>);
    create(user: Teacher): Promise<Teacher>;
    findById(userId: string): Promise<Teacher>;
    printCurrentUser(currentUserProfile: UserProfile): Promise<UserProfile>;
    replaceById(id: string, teacher: Teacher): Promise<void>;
    count(where?: Where<Teacher>): Promise<Count>;
    find(filter?: Filter<Teacher>): Promise<Teacher[]>;
    login(credentials: CredentialsTeacher): Promise<{
        token: string;
    }>;
}
export declare const TeacherProfileSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
        };
        email: {
            type: string;
        };
        name: {
            type: string;
        };
    };
};
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: {
                type: string;
                required: string[];
                properties: {
                    email: {
                        type: string;
                        format: string;
                    };
                    password: {
                        type: string;
                        minLength: number;
                    };
                };
            };
        };
    };
};
