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
import {Week} from '../models';
import {WeekRepository} from '../repositories';

export class WeekController {
  constructor(
    @repository(WeekRepository)
    public weekRepository : WeekRepository,
  ) {}

  @post('/weeks', {
    responses: {
      '200': {
        description: 'Week model instance',
        content: {'application/json': {schema: {'x-ts-type': Week}}},
      },
    },
  })
  async create(@requestBody() week: Week): Promise<Week> {
    return await this.weekRepository.create(week);
  }

  @get('/weeks/count', {
    responses: {
      '200': {
        description: 'Week model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Week)) where?: Where<Week>,
  ): Promise<Count> {
    return await this.weekRepository.count(where);
  }

  @get('/weeks', {
    responses: {
      '200': {
        description: 'Array of Week model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Week}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Week)) filter?: Filter<Week>,
  ): Promise<Week[]> {
    return await this.weekRepository.find(filter);
  }

  @patch('/weeks', {
    responses: {
      '200': {
        description: 'Week PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() week: Week,
    @param.query.object('where', getWhereSchemaFor(Week)) where?: Where<Week>,
  ): Promise<Count> {
    return await this.weekRepository.updateAll(week, where);
  }

  @get('/weeks/{id}', {
    responses: {
      '200': {
        description: 'Week model instance',
        content: {'application/json': {schema: {'x-ts-type': Week}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Week> {
    return await this.weekRepository.findById(id);
  }

  @patch('/weeks/{id}', {
    responses: {
      '204': {
        description: 'Week PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() week: Week,
  ): Promise<void> {
    await this.weekRepository.updateById(id, week);
  }

  @put('/weeks/{id}', {
    responses: {
      '204': {
        description: 'Week PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() week: Week,
  ): Promise<void> {
    await this.weekRepository.replaceById(id, week);
  }

  @del('/weeks/{id}', {
    responses: {
      '204': {
        description: 'Week DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.weekRepository.deleteById(id);
  }
}
