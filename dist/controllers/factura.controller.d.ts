import { Count, Filter, Where } from '@loopback/repository';
import { Factura } from '../models';
import { FacturaRepository } from '../repositories';
export declare class FacturaController {
    facturaRepository: FacturaRepository;
    constructor(facturaRepository: FacturaRepository);
    create(factura: Factura): Promise<Factura>;
    count(where?: Where<Factura>): Promise<Count>;
    find(filter?: Filter<Factura>): Promise<Factura[]>;
    updateAll(factura: Factura, where?: Where<Factura>): Promise<Count>;
    findById(id: string): Promise<Factura>;
    updateById(id: string, factura: Factura): Promise<void>;
    replaceById(id: string, factura: Factura): Promise<void>;
    deleteById(id: string): Promise<void>;
}
