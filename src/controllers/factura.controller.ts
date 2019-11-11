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
} from '@loopback/rest';
import {Factura} from '../models';
import {FacturaRepository} from '../repositories';

export class FacturaController {
  constructor(
    @repository(FacturaRepository)
    public facturaRepository : FacturaRepository,
  ) {}

  @post('/facturas', {
    responses: {
      '200': {
        description: 'Factura model instance',
        content: {'application/json': {schema: {'x-ts-type': Factura}}},
      },
    },
  })
  async create(@requestBody() factura: Factura): Promise<Factura> {
    return await this.facturaRepository.create(factura);
  }

  @get('/facturas/count', {
    responses: {
      '200': {
        description: 'Factura model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Factura)) where?: Where<Factura>,
  ): Promise<Count> {
    return await this.facturaRepository.count(where);
  }

  @get('/facturas', {
    responses: {
      '200': {
        description: 'Array of Factura model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Factura}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Factura)) filter?: Filter<Factura>,
  ): Promise<Factura[]> {
    return await this.facturaRepository.find(filter);
  }

  @patch('/facturas', {
    responses: {
      '200': {
        description: 'Factura PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() factura: Factura,
    @param.query.object('where', getWhereSchemaFor(Factura)) where?: Where<Factura>,
  ): Promise<Count> {
    return await this.facturaRepository.updateAll(factura, where);
  }

  @get('/facturas/{id}', {
    responses: {
      '200': {
        description: 'Factura model instance',
        content: {'application/json': {schema: {'x-ts-type': Factura}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Factura> {
    return await this.facturaRepository.findById(id);
  }

  @patch('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Factura PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() factura: Factura,
  ): Promise<void> {
    await this.facturaRepository.updateById(id, factura);
  }

  @put('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Factura PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() factura: Factura,
  ): Promise<void> {
    await this.facturaRepository.replaceById(id, factura);
  }

  @del('/facturas/{id}', {
    responses: {
      '204': {
        description: 'Factura DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.facturaRepository.deleteById(id);
  }
}
