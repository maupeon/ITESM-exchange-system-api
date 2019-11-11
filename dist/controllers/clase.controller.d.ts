import { Count, Filter, Where } from '@loopback/repository';
import { Clase } from '../models';
import { ClaseRepository } from '../repositories';
export declare class ClaseController {
    claseRepository: ClaseRepository;
    constructor(claseRepository: ClaseRepository);
    create(clase: Clase): Promise<Clase>;
    count(where?: Where<Clase>): Promise<Count>;
    find(filter?: Filter<Clase>): Promise<Clase[]>;
    updateAll(clase: Clase, where?: Where<Clase>): Promise<Count>;
    findById(id: string): Promise<Clase>;
    updateById(id: string, clase: Clase): Promise<void>;
    replaceById(id: string, clase: Clase): Promise<void>;
    deleteById(id: string): Promise<void>;
}
