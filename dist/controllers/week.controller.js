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
let WeekController = class WeekController {
    constructor(weekRepository) {
        this.weekRepository = weekRepository;
    }
    async create(week) {
        return await this.weekRepository.create(week);
    }
    async count(where) {
        return await this.weekRepository.count(where);
    }
    async find(filter) {
        return await this.weekRepository.find(filter);
    }
    async updateAll(week, where) {
        return await this.weekRepository.updateAll(week, where);
    }
    async findById(id) {
        return await this.weekRepository.findById(id);
    }
    async updateById(id, week) {
        await this.weekRepository.updateById(id, week);
    }
    async replaceById(id, week) {
        await this.weekRepository.replaceById(id, week);
    }
    async deleteById(id) {
        await this.weekRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/weeks', {
        responses: {
            '200': {
                description: 'Week model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Week } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Week]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "create", null);
__decorate([
    rest_1.get('/weeks/count', {
        responses: {
            '200': {
                description: 'Week model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Week))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "count", null);
__decorate([
    rest_1.get('/weeks', {
        responses: {
            '200': {
                description: 'Array of Week model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Week } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Week))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "find", null);
__decorate([
    rest_1.patch('/weeks', {
        responses: {
            '200': {
                description: 'Week PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Week))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Week, Object]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/weeks/{id}', {
        responses: {
            '200': {
                description: 'Week model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Week } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "findById", null);
__decorate([
    rest_1.patch('/weeks/{id}', {
        responses: {
            '204': {
                description: 'Week PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Week]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "updateById", null);
__decorate([
    rest_1.put('/weeks/{id}', {
        responses: {
            '204': {
                description: 'Week PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Week]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/weeks/{id}', {
        responses: {
            '204': {
                description: 'Week DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WeekController.prototype, "deleteById", null);
WeekController = __decorate([
    __param(0, repository_1.repository(repositories_1.WeekRepository)),
    __metadata("design:paramtypes", [repositories_1.WeekRepository])
], WeekController);
exports.WeekController = WeekController;
//# sourceMappingURL=week.controller.js.map