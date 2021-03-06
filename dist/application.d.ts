import { ApplicationConfig, BindingKey } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
/**
 * Information from package.json
 */
export interface PackageInfo {
    name: string;
    version: string;
    description: string;
}
export declare const PackageKey: BindingKey<PackageInfo>;
declare const FacturasApiApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("@loopback/boot").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/context/dist/value-promise").Constructor<import("@loopback/boot").Booter>[]): import("@loopback/boot").Binding<any>[];
    component(component: import("@loopback/context/dist/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("@loopback/context/dist/value-promise").Constructor<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    serviceProvider<S>(provider: import("@loopback/service-proxy").Class<import("@loopback/context/dist/provider").Provider<S>>, name?: string | undefined): import("@loopback/boot").Binding<S>;
    component(component: import("@loopback/service-proxy").Class<unknown>, name?: string | undefined): void;
    mountComponentServices(component: import("@loopback/service-proxy").Class<unknown>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    repository<R extends import("@loopback/repository").Repository<any>>(repoClass: import("@loopback/repository").Class<R>, name?: string | undefined): import("@loopback/boot").Binding<R>;
    getRepository<R extends import("@loopback/repository").Repository<any>>(repo: import("@loopback/repository").Class<R>): Promise<R>;
    dataSource<D extends import("loopback-datasource-juggler").DataSource>(dataSource: D | import("@loopback/repository").Class<D>, name?: string | undefined): import("@loopback/boot").Binding<D>;
    component(component: import("@loopback/repository").Class<unknown>, name?: string | undefined): void;
    mountComponentRepositories(component: import("@loopback/repository").Class<unknown>): void;
    migrateSchema(options?: import("@loopback/repository").SchemaMigrationOptions | undefined): Promise<void>;
}) & typeof RestApplication;
export declare class FacturasApiApplication extends FacturasApiApplication_base {
    constructor(options?: ApplicationConfig);
    setUpBindings(): void;
}
export {};
