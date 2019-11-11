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
const rest_1 = require("@loopback/rest");
const teacher_repository_1 = require("../repositories/teacher.repository");
const repository_1 = require("@loopback/repository");
const key_1 = require("../key");
const context_1 = require("@loopback/context");
let MyUserService = class MyUserService {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async verifyCredentials(credentials) {
        const foundUser = await this.userRepository.findOne({
            where: { _id: credentials._id },
        });
        if (!foundUser) {
            throw new rest_1.HttpErrors.NotFound(`User with rfc ${credentials._id} not found.`);
        }
        const passwordMatched = await this.passwordHasher.comparePassword(credentials.password, foundUser.password);
        if (!passwordMatched) {
            throw new rest_1.HttpErrors.Unauthorized('The credentials are not correct.');
        }
        return foundUser;
    }
    convertToUserProfile(user) {
        // since first name and lastName are optional, no error is thrown if not provided
        let userName = '';
        if (user.name)
            userName = `${user.name}`;
        if (user.lastName)
            userName = user.lastName
                ? `${userName} ${user.lastName}`
                : `${user.lastName}`;
        return { id: user._id, name: userName };
    }
};
MyUserService = __decorate([
    __param(0, repository_1.repository(teacher_repository_1.TeacherRepository)),
    __param(1, context_1.inject(key_1.PasswordHasherBindings.PASSWORD_HASHER)),
    __metadata("design:paramtypes", [teacher_repository_1.TeacherRepository, Object])
], MyUserService);
exports.MyUserService = MyUserService;
//# sourceMappingURL=empresa-service.js.map