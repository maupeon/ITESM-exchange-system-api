import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
  HttpErrors,
} from '@loopback/rest';
import {Teacher} from '../models';
import {TeacherRepository} from '../repositories';
import {inject} from '@loopback/core';
import {
  authenticate,
  UserProfile,
  AuthenticationBindings,
  TokenService,
  UserService,
} from '@loopback/authentication';
import {CredentialsTeacher} from '../repositories/teacher.repository';
import {PasswordHasher} from '../services/hash.password.bcryptjs';
import {validateCredentials} from '../services/validator';


import {
  TokenServiceBindings,
  PasswordHasherBindings,
  UserServiceBindings,
} from '../key';
import * as _ from 'lodash';

export class TeacherController {
  constructor(
    @repository(TeacherRepository) public userRepository: TeacherRepository,
    @inject(PasswordHasherBindings.PASSWORD_HASHER)
    public passwordHasher: PasswordHasher,
    @inject(TokenServiceBindings.TOKEN_SERVICE)
    public jwtService: TokenService,
    @inject(UserServiceBindings.USER_SERVICE)
    public userService: UserService<Teacher, CredentialsTeacher>,
  ) {}

  @post('/teachers')
    async create(@requestBody() user: Teacher): Promise<Teacher> {
      // ensure a valid email value and password value
      validateCredentials(_.pick(user, ['_id', 'password']));

      // encrypt the password
      user.password = await this.passwordHasher.hashPassword(user.password);

      try {
        // create the new user
        const savedUser = await this.userRepository.create(user);
        delete savedUser.password;

        return savedUser;
      } catch (error) {
        // MongoError 11000 duplicate key
        if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
          throw new HttpErrors.Conflict('Email value is already taken');
        } else {
          throw error;
        }
      }
    }

  
    @get('/teachers/{_id}', {
      responses: {
        '200': {
          description: 'Teacher',
          content: {
            'application/json': {
              schema: {
                'x-ts-type': Teacher,
              },
            },
          },
        },
      },
    })
    async findById(@param.path.string('_id') userId: string): Promise<Teacher> {
      return this.userRepository.findById(userId, {
        fields: {password: false},
      });
    }

    @get('/teachers/me', {
      responses: {
        '200': {
          description: 'The current user profile',
          content: {
            'application/json': {
              schema: TeacherProfileSchema,
            },
          },
        },
      },
    })
    @authenticate('jwt')
    async printCurrentUser(
      @inject(AuthenticationBindings.CURRENT_USER)
      currentUserProfile: UserProfile,
    ): Promise<UserProfile> {
      return currentUserProfile;
    }

    @put('/teachers/{id}', {
      responses: {
        '204': {
          description: 'Teacher PUT success',
        },
      },
    })
    async replaceById(
      @param.path.string('id') id: string,
      @requestBody() teacher: Teacher,
    ): Promise<void> {
      // encrypt the password
      teacher.password = await this.passwordHasher.hashPassword(teacher.password);
      await this.userRepository.replaceById(id, teacher);
    }

    @get('/teachers/count', {
      responses: {
        '200': {
          description: 'Teacher model count',
          content: {'application/json': {schema: CountSchema}},
        },
      },
    })
    async count(
      @param.query.object('where', getWhereSchemaFor(Teacher)) where?: Where<Teacher>,
    ): Promise<Count> {
      return await this.userRepository.count(where);
    }

    @get('/teachers', {
      responses: {
        '200': {
          description: 'Array of Teacher model instances',
          content: {
            'application/json': {
              schema: {type: 'array', items: {'x-ts-type': Teacher}},
            },
          },
        },
      },
    })
    async find(
      @param.query.object('filter', getFilterSchemaFor(Teacher)) filter?: Filter<Teacher>,
    ): Promise<Teacher[]> {
      return await this.userRepository.find(filter);
    }

    @post('/teachers/login', {
      responses: {
        '200': {
          description: 'Token',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  token: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    })
    async login(
      @requestBody(CredentialsRequestBody) credentials: CredentialsTeacher,
    ): Promise<{token: string}> {
      // ensure the user exists, and the password is correct
      const user = await this.userService.verifyCredentials(credentials);

      // convert a User object into a UserProfile object (reduced set of properties)
      const userProfile = this.userService.convertToUserProfile(user);

      // create a JSON Web Token based on the user profile
      const token = await this.jwtService.generateToken(userProfile);

      return {token};
    }
  }

  export const TeacherProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
      id: {type: 'string'},
      email: {type: 'string'},
      name: {type: 'string'},
    },
  };


  const CredentialsSchema = {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string',
        format: 'email',
      },
      password: {
        type: 'string',
        minLength: 8,
      },
    },
  };

  export const CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
      'application/json': {schema: CredentialsSchema},
    },
}
