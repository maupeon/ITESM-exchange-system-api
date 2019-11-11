import { Count, Filter, Where } from '@loopback/repository';
import { Week } from '../models';
import { WeekRepository } from '../repositories';
export declare class WeekController {
    weekRepository: WeekRepository;
    constructor(weekRepository: WeekRepository);
    create(week: Week): Promise<Week>;
    count(where?: Where<Week>): Promise<Count>;
    find(filter?: Filter<Week>): Promise<Week[]>;
    updateAll(week: Week, where?: Where<Week>): Promise<Count>;
    findById(id: string): Promise<Week>;
    updateById(id: string, week: Week): Promise<void>;
    replaceById(id: string, week: Week): Promise<void>;
    deleteById(id: string): Promise<void>;
}
