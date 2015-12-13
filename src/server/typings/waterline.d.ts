declare var waterline: waterline.Waterline;

declare module waterline {
    export interface Waterline {
        new (): Waterline;
        _collections: Collection[];
        _connections: Connection[];
        Collection: Collection;
        Model: Model;
        loadCollection(collection: Collection): Collection[];
        initialize(options: ConfigOptions, cb: Cb): void;
        schema: Schema;
        teardown(cb: Cb): void;
        bootstrap(cb: Cb): void;
    }

    export interface Collection extends Core, Query {
        new (waterline: Waterline, connections: Connection[], cb: Cb): Collection;
        connections: Connection[];
        waterline: Waterline;
        attributes: Attributes;
        extend(protoProps: {}, staticProps?: {}): any;
    }

    export interface Attributes {
        migrate?: string;
    }

    export interface CollectionLoader {
        new (collection: Collection, connections: Connection[], defaults: {}): CollectionLoader;
        initialize(context: {}): Collection;
        _validate(collection: Collection, connections: Connection[]): Collection;
        _getConnections(collection: Collection, connections: Connection[]): {};
    }

    export interface Core {
        new (options: {}): Core;
        adapter: Adapter;
        _attributes: {};
        connections: Connection[];
        defaults: Attributes;
        _cast: Cast;
        _schema: Schema;
        _validator: Validator;
        _callbacks: {
            afterCreate: any[],
            beforeCreate: any[]
        };
        _instanceMethods: {};
        hasSchema: boolean;
        migrate: string;
        _initialize(options: {}): void;
        _model: Model;
        _transformer: Transformer;
        adapterDictionary: Dictionary;
        _normalizeSchemaFlag(): boolean;
    }

    export interface Dictionary {
        // TODO
    }

    export interface Transformer {
        // TODO
    }

    export interface Validator {
        // TODO
    }

    export interface Cast {
        // TODO
    }

    export interface Query extends Validate, Ddl, Dql, Aggregate, Composite, FindersBasic, FindersHelpers, FindersDynamicFinders, Stream {
        new (): Query;
        adapter: Adapter;
        buildDynamicFinders(): void;
        sync(cb: Cb): void;
        extend(protoProps: {}, staticProps: {}): {};
    }

    export interface Validate {
        validate: (values: any[], presentOnly?: Cb | boolean, cb?: Cb) => void;
    }

    export interface Ddl {
        describe(cb: Cb): void;
        alter(cb: Cb): void;
        drop(cb: Cb): void;
    }

    export interface Dql {
        create(values: any | any[], cb?: Cb): any;
        update(criteria: {}, values: {}, cb?: Cb): any;
        destroy(criteria: {}, cb?: Cb): any;
        count(criteria: {}, options: {}, cb?: Cb): any;
        join(collection, fk, pk, Cb): void;
    }

    export interface Aggregate {
        createEach(valuesList: any[], cb?: Cb): any;
        findOrCreateEach(criteria: {}, valuesList: any[], cb?: Cb): any;
    }

    export interface Composite {
        findOrCreate(criteria: {}, values?: {}, cb?: Cb): any;
    }

    export interface FindersBasic {
        findOne(criteria: {}, cb?: Cb): any;
        find(criteria?: {}, options?: {}, cb?: Cb): any;
        where(...arguments: any[]): FindersBasic;
        select(...arguments: any[]): FindersBasic;
    }

    export interface FindersHelpers {
        findOneLike(criteria: {}, options: {}, cb: Cb): void;
        findLike(criteria: {}, options: {}, cb: Cb): void;
        startsWith(criteria: {}, options: {}, cb: Cb): void;
        endsWith(criteria: {}, options: {}, cb: Cb): void;
        contains(criteria: {}, options: {}, cb: Cb): void;
    }

    export interface FindersDynamicFinders {
        buildDynamicFinders(): void;
        generateDynamicFinder(attrName: string, method: string, dontCapitalize: boolean): any;
        generateAssociationFinders(attrName: string): any;
    }

    export interface Stream {
        stream(criteria: {}, transformation?: {}): ModelStream;
    }

    export interface ModelStream {
        // TODO
    }

    export interface Connection {
        default?: any;
        disk?: any;
        mongo?: any;
        mysql?: any;
    }

    export interface Model {
        (context: {}, mixins: {}): Model;
        toObject(): Object;
        save(options: {}, cb: Cb): any;
        destory(cb): any;
        _defineAssociations(): void;
        _normalizeAssociations(): void;
        _cast(values: any[]): void;
        validate(cb: Cb): void | any;
        toJSON(): JSON;
    }

    export interface ConfigOptions {
        adapters: Adapter;
        connections: Connection;
    }

    export interface Cb {
        (error: waterline.WLError, result?: any): any;
    }

    export interface Adapter {
        url?: string;
        filePath?: string;
        default?: any;
        disk?: any;
        mongo?: any;
        mysql?: any;
        /*
         connections: Connection[],
         query: any,
         collection: string,
         identity: string,
         dictionary: adapterDictionary
         */
    }

    export interface AdapterDictionary {
        // TODO
    }

    export interface Schema {
        // TODO, in waterline-schema.d.ts
    }

    export interface Record {
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }

    export interface WLError {
        invalidAttributes: any;
        model: string;
        _e: any;
        rawStack: string;
        reason: string;
        code: string;
        status: number;
        details: string;
    }
}

declare module 'waterline' {
    export = waterline;
}