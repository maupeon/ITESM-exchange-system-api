import { juggler } from '@loopback/repository';
export declare class MongoConnDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
