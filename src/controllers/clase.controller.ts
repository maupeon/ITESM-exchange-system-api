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
import {Clase} from '../models';
import {ClaseRepository} from '../repositories';

export class ClaseController {
  constructor(
    @repository(ClaseRepository)
    public claseRepository : ClaseRepository,
  ) {}

  @post('/clases', {
    responses: {
      '200': {
        description: 'Clase model instance',
        content: {'application/json': {schema: {'x-ts-type': Clase}}},
      },
    },
  })
  async create(@requestBody() clase: Clase): Promise<Clase> {
    return await this.claseRepository.create(clase);
  }

  @get('/clases/count', {
    responses: {
      '200': {
        description: 'Clase model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Clase)) where?: Where<Clase>,
  ): Promise<Count> {
    return await this.claseRepository.count(where);
  }

  @get('/clases', {
    responses: {
      '200': {
        description: 'Array of Clase model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Clase}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Clase)) filter?: Filter<Clase>,
  ): Promise<Clase[]> {
    return await this.claseRepository.find(filter);
  }

  @patch('/clases', {
    responses: {
      '200': {
        description: 'Clase PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() clase: Clase,
    @param.query.object('where', getWhereSchemaFor(Clase)) where?: Where<Clase>,
  ): Promise<Count> {
    return await this.claseRepository.updateAll(clase, where);
  }

  @get('/clases/{id}', {
    responses: {
      '200': {
        description: 'Clase model instance',
        content: {'application/json': {schema: {'x-ts-type': Clase}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Clase> {
    return await this.claseRepository.findById(id);
  }

  @patch('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() clase: Clase,
  ): Promise<void> {
    await this.claseRepository.updateById(id, clase);
  }

  @put('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() clase: Clase,
  ): Promise<void> {
    await this.claseRepository.replaceById(id, clase);
  }

  @del('/clases/{id}', {
    responses: {
      '204': {
        description: 'Clase DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.claseRepository.deleteById(id);
  }
}
