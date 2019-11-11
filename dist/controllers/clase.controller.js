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
let ClaseController = class ClaseController {
    constructor(claseRepository) {
        this.claseRepository = claseRepository;
    }
    async create(clase) {
        return await this.claseRepository.create(clase);
    }
    async count(where) {
        return await this.claseRepository.count(where);
    }
    async find(filter) {
        return await this.claseRepository.find(filter);
    }
    async updateAll(clase, where) {
        return await this.claseRepository.updateAll(clase, where);
    }
    async findById(id) {
        return await this.claseRepository.findById(id);
    }
    async updateById(id, clase) {
        await this.claseRepository.updateById(id, clase);
    }
    async replaceById(id, clase) {
        await this.claseRepository.replaceById(id, clase);
    }
    async deleteById(id) {
        await this.claseRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/clases', {
        responses: {
            '200': {
                description: 'Clase model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Clase } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Clase]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "create", null);
__decorate([
    rest_1.get('/clases/count', {
        responses: {
            '200': {
                description: 'Clase model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Clase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "count", null);
__decorate([
    rest_1.get('/clases', {
        responses: {
            '200': {
                description: 'Array of Clase model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Clase } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Clase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "find", null);
__decorate([
    rest_1.patch('/clases', {
        responses: {
            '200': {
                description: 'Clase PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Clase))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Clase, Object]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/clases/{id}', {
        responses: {
            '200': {
                description: 'Clase model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Clase } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "findById", null);
__decorate([
    rest_1.patch('/clases/{id}', {
        responses: {
            '204': {
                description: 'Clase PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Clase]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "updateById", null);
__decorate([
    rest_1.put('/clases/{id}', {
        responses: {
            '204': {
                description: 'Clase PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Clase]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/clases/{id}', {
        responses: {
            '204': {
                description: 'Clase DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClaseController.prototype, "deleteById", null);
ClaseController = __decorate([
    __param(0, repository_1.repository(repositories_1.ClaseRepository)),
    __metadata("design:paramtypes", [repositories_1.ClaseRepository])
], ClaseController);
exports.ClaseController = ClaseController;
//# sourceMappingURL=clase.controller.js.map