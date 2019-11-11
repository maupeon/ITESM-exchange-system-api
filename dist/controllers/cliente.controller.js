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
let ClienteController = class ClienteController {
    constructor(clienteRepository) {
        this.clienteRepository = clienteRepository;
    }
    async create(cliente) {
        return await this.clienteRepository.create(cliente);
    }
    async count(where) {
        return await this.clienteRepository.count(where);
    }
    async find(filter) {
        return await this.clienteRepository.find(filter);
    }
    async updateAll(cliente, where) {
        return await this.clienteRepository.updateAll(cliente, where);
    }
    async findById(id) {
        return await this.clienteRepository.findById(id);
    }
    async updateById(id, cliente) {
        await this.clienteRepository.updateById(id, cliente);
    }
    async replaceById(id, cliente) {
        await this.clienteRepository.replaceById(id, cliente);
    }
    async deleteById(id) {
        await this.clienteRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/clientes', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Cliente } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "create", null);
__decorate([
    rest_1.get('/clientes/count', {
        responses: {
            '200': {
                description: 'Cliente model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cliente))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "count", null);
__decorate([
    rest_1.get('/clientes', {
        responses: {
            '200': {
                description: 'Array of Cliente model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Cliente } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Cliente))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "find", null);
__decorate([
    rest_1.patch('/clientes', {
        responses: {
            '200': {
                description: 'Cliente PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Cliente))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Cliente, Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/clientes/{id}', {
        responses: {
            '200': {
                description: 'Cliente model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Cliente } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "findById", null);
__decorate([
    rest_1.patch('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "updateById", null);
__decorate([
    rest_1.put('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Cliente]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/clientes/{id}', {
        responses: {
            '204': {
                description: 'Cliente DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "deleteById", null);
ClienteController = __decorate([
    __param(0, repository_1.repository(repositories_1.ClienteRepository)),
    __metadata("design:paramtypes", [repositories_1.ClienteRepository])
], ClienteController);
exports.ClienteController = ClienteController;
//# sourceMappingURL=cliente.controller.js.map