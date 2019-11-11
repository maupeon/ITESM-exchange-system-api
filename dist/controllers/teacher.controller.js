"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const core_1 = require("@loopback/core");
const authentication_1 = require("@loopback/authentication");
const validator_1 = require("../services/validator");
const key_1 = require("../key");
const _ = require("lodash");
let TeacherController = class TeacherController {
    constructor(userRepository, passwordHasher, jwtService, userService) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async create(user) {
        // ensure a valid email value and password value
        validator_1.validateCredentials(_.pick(user, ['_id', 'password']));
        // encrypt the password
        user.password = await this.passwordHasher.hashPassword(user.password);
        try {
            // create the new user
            const savedUser = await this.userRepository.create(user);
            delete savedUser.password;
            return savedUser;
        }
        catch (error) {
            // MongoError 11000 duplicate key
            if (error.code === 11000 && error.errmsg.includes('index: uniqueEmail')) {
                throw new rest_1.HttpErrors.Conflict('Email value is already taken');
            }
            else {
                throw error;
            }
        }
    }
    async findById(userId) {
        return this.userRepository.findById(userId, {
            fields: { password: false },
        });
    }
    async printCurrentUser(currentUserProfile) {
        return currentUserProfile;
    }
    async replaceById(id, teacher) {
        // encrypt the password
        teacher.password = await this.passwordHasher.hashPassword(teacher.password);
        await this.userRepository.replaceById(id, teacher);
    }
    async count(where) {
        return await this.userRepository.count(where);
    }
    async find(filter) {
        return await this.userRepository.find(filter);
    }
    async login(credentials) {
        // ensure the user exists, and the password is correct
        const user = await this.userService.verifyCredentials(credentials);
        // convert a User object into a UserProfile object (reduced set of properties)
        const userProfile = this.userService.convertToUserProfile(user);
        // create a JSON Web Token based on the user profile
        const token = await this.jwtService.generateToken(userProfile);
        return { token };
    }
};
__decorate([
    rest_1.post('/teachers'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "create", null);
__decorate([
    rest_1.get('/teachers/{_id}', {
        responses: {
            '200': {
                description: 'Teacher',
                content: {
                    'application/json': {
                        schema: {
                            'x-ts-type': models_1.Teacher,
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "findById", null);
__decorate([
    rest_1.get('/teachers/me', {
        responses: {
            '200': {
                description: 'The current user profile',
                content: {
                    'application/json': {
                        schema: exports.TeacherProfileSchema,
                    },
                },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, core_1.inject(authentication_1.AuthenticationBindings.CURRENT_USER)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "printCurrentUser", null);
__decorate([
    rest_1.put('/teachers/{id}', {
        responses: {
            '204': {
                description: 'Teacher PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Teacher]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "replaceById", null);
__decorate([
    rest_1.get('/teachers/count', {
        responses: {
            '200': {
                description: 'Teacher model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Teacher))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "count", null);
__decorate([
    rest_1.get('/teachers', {
        responses: {
            '200': {
                description: 'Array of Teacher model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Teacher } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Teacher))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "find", null);
__decorate([
    rest_1.post('/teachers/login', {
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
    }),
    __param(0, rest_1.requestBody(exports.CredentialsRequestBody)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TeacherController.prototype, "login", null);
TeacherController = __decorate([
    __param(0, repository_1.repository(repositories_1.TeacherRepository)),
    __param(1, core_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
    __param(2, core_1.inject(key_1.TokenServiceBindings.TOKEN_SERVICE)),
    __param(3, core_1.inject(key_1.UserServiceBindings.USER_SERVICE)),
    __metadata("design:paramtypes", [repositories_1.TeacherRepository, Object, Object, Object])
], TeacherController);
exports.TeacherController = TeacherController;
exports.TeacherProfileSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        id: { type: 'string' },
        email: { type: 'string' },
        name: { type: 'string' },
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
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
//# sourceMappingURL=teacher.controller.js.map