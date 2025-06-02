
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model ModelImage
 * 
 */
export type ModelImage = $Result.DefaultSelection<Prisma.$ModelImagePayload>
/**
 * Model Hotels
 * 
 */
export type Hotels = $Result.DefaultSelection<Prisma.$HotelsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SUB_ADMIN: 'SUB_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelImage`: Exposes CRUD operations for the **ModelImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelImages
    * const modelImages = await prisma.modelImage.findMany()
    * ```
    */
  get modelImage(): Prisma.ModelImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hotels`: Exposes CRUD operations for the **Hotels** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hotels
    * const hotels = await prisma.hotels.findMany()
    * ```
    */
  get hotels(): Prisma.HotelsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    Model: 'Model',
    ModelImage: 'ModelImage',
    Hotels: 'Hotels'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "model" | "modelImage" | "hotels"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      ModelImage: {
        payload: Prisma.$ModelImagePayload<ExtArgs>
        fields: Prisma.ModelImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          findFirst: {
            args: Prisma.ModelImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          findMany: {
            args: Prisma.ModelImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>[]
          }
          create: {
            args: Prisma.ModelImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          createMany: {
            args: Prisma.ModelImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ModelImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          update: {
            args: Prisma.ModelImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          deleteMany: {
            args: Prisma.ModelImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModelImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelImagePayload>
          }
          aggregate: {
            args: Prisma.ModelImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelImage>
          }
          groupBy: {
            args: Prisma.ModelImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelImageCountArgs<ExtArgs>
            result: $Utils.Optional<ModelImageCountAggregateOutputType> | number
          }
        }
      }
      Hotels: {
        payload: Prisma.$HotelsPayload<ExtArgs>
        fields: Prisma.HotelsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findFirst: {
            args: Prisma.HotelsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          findMany: {
            args: Prisma.HotelsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>[]
          }
          create: {
            args: Prisma.HotelsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          createMany: {
            args: Prisma.HotelsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          update: {
            args: Prisma.HotelsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          deleteMany: {
            args: Prisma.HotelsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelsPayload>
          }
          aggregate: {
            args: Prisma.HotelsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotels>
          }
          groupBy: {
            args: Prisma.HotelsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HotelsCountArgs<ExtArgs>
            result: $Utils.Optional<HotelsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    model?: ModelOmit
    modelImage?: ModelImageOmit
    hotels?: HotelsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    image: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | ModelCountOutputTypeCountImageArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    age: string | null
    email: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    service: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    age: string | null
    email: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    service: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    age: number
    email: number
    phone: number
    whatsapp: number
    address: number
    service: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true
  }

  export type ModelSumAggregateInputType = {
    id?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    phone?: true
    whatsapp?: true
    address?: true
    service?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    phone?: true
    whatsapp?: true
    address?: true
    service?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    name?: true
    age?: true
    email?: true
    phone?: true
    whatsapp?: true
    address?: true
    service?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    name: string
    age: string
    email: string | null
    phone: string | null
    whatsapp: string | null
    address: string | null
    service: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    service?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | Model$imageArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>



  export type ModelSelectScalar = {
    id?: boolean
    name?: boolean
    age?: boolean
    email?: boolean
    phone?: boolean
    whatsapp?: boolean
    address?: boolean
    service?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "age" | "email" | "phone" | "whatsapp" | "address" | "service" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["model"]>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | Model$imageArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      image: Prisma.$ModelImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      age: string
      email: string | null
      phone: string | null
      whatsapp: string | null
      address: string | null
      service: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends Model$imageArgs<ExtArgs> = {}>(args?: Subset<T, Model$imageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly name: FieldRef<"Model", 'String'>
    readonly age: FieldRef<"Model", 'String'>
    readonly email: FieldRef<"Model", 'String'>
    readonly phone: FieldRef<"Model", 'String'>
    readonly whatsapp: FieldRef<"Model", 'String'>
    readonly address: FieldRef<"Model", 'String'>
    readonly service: FieldRef<"Model", 'String'>
    readonly isActive: FieldRef<"Model", 'Boolean'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to update.
     */
    limit?: number
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
    /**
     * Limit how many Models to delete.
     */
    limit?: number
  }

  /**
   * Model.image
   */
  export type Model$imageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    where?: ModelImageWhereInput
    orderBy?: ModelImageOrderByWithRelationInput | ModelImageOrderByWithRelationInput[]
    cursor?: ModelImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelImageScalarFieldEnum | ModelImageScalarFieldEnum[]
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model ModelImage
   */

  export type AggregateModelImage = {
    _count: ModelImageCountAggregateOutputType | null
    _avg: ModelImageAvgAggregateOutputType | null
    _sum: ModelImageSumAggregateOutputType | null
    _min: ModelImageMinAggregateOutputType | null
    _max: ModelImageMaxAggregateOutputType | null
  }

  export type ModelImageAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type ModelImageSumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type ModelImageMinAggregateOutputType = {
    id: number | null
    modelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelImageMaxAggregateOutputType = {
    id: number | null
    modelId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelImageCountAggregateOutputType = {
    id: number
    image: number
    modelId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelImageAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type ModelImageSumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type ModelImageMinAggregateInputType = {
    id?: true
    modelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelImageMaxAggregateInputType = {
    id?: true
    modelId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelImageCountAggregateInputType = {
    id?: true
    image?: true
    modelId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelImage to aggregate.
     */
    where?: ModelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelImages to fetch.
     */
    orderBy?: ModelImageOrderByWithRelationInput | ModelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelImages
    **/
    _count?: true | ModelImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelImageMaxAggregateInputType
  }

  export type GetModelImageAggregateType<T extends ModelImageAggregateArgs> = {
        [P in keyof T & keyof AggregateModelImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelImage[P]>
      : GetScalarType<T[P], AggregateModelImage[P]>
  }




  export type ModelImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelImageWhereInput
    orderBy?: ModelImageOrderByWithAggregationInput | ModelImageOrderByWithAggregationInput[]
    by: ModelImageScalarFieldEnum[] | ModelImageScalarFieldEnum
    having?: ModelImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelImageCountAggregateInputType | true
    _avg?: ModelImageAvgAggregateInputType
    _sum?: ModelImageSumAggregateInputType
    _min?: ModelImageMinAggregateInputType
    _max?: ModelImageMaxAggregateInputType
  }

  export type ModelImageGroupByOutputType = {
    id: number
    image: JsonValue | null
    modelId: number
    createdAt: Date
    updatedAt: Date
    _count: ModelImageCountAggregateOutputType | null
    _avg: ModelImageAvgAggregateOutputType | null
    _sum: ModelImageSumAggregateOutputType | null
    _min: ModelImageMinAggregateOutputType | null
    _max: ModelImageMaxAggregateOutputType | null
  }

  type GetModelImageGroupByPayload<T extends ModelImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelImageGroupByOutputType[P]>
            : GetScalarType<T[P], ModelImageGroupByOutputType[P]>
        }
      >
    >


  export type ModelImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    modelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelImage"]>



  export type ModelImageSelectScalar = {
    id?: boolean
    image?: boolean
    modelId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "modelId" | "createdAt" | "updatedAt", ExtArgs["result"]["modelImage"]>
  export type ModelImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
  }

  export type $ModelImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelImage"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: Prisma.JsonValue | null
      modelId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelImage"]>
    composites: {}
  }

  type ModelImageGetPayload<S extends boolean | null | undefined | ModelImageDefaultArgs> = $Result.GetResult<Prisma.$ModelImagePayload, S>

  type ModelImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelImageCountAggregateInputType | true
    }

  export interface ModelImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelImage'], meta: { name: 'ModelImage' } }
    /**
     * Find zero or one ModelImage that matches the filter.
     * @param {ModelImageFindUniqueArgs} args - Arguments to find a ModelImage
     * @example
     * // Get one ModelImage
     * const modelImage = await prisma.modelImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelImageFindUniqueArgs>(args: SelectSubset<T, ModelImageFindUniqueArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelImageFindUniqueOrThrowArgs} args - Arguments to find a ModelImage
     * @example
     * // Get one ModelImage
     * const modelImage = await prisma.modelImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageFindFirstArgs} args - Arguments to find a ModelImage
     * @example
     * // Get one ModelImage
     * const modelImage = await prisma.modelImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelImageFindFirstArgs>(args?: SelectSubset<T, ModelImageFindFirstArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageFindFirstOrThrowArgs} args - Arguments to find a ModelImage
     * @example
     * // Get one ModelImage
     * const modelImage = await prisma.modelImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelImages
     * const modelImages = await prisma.modelImage.findMany()
     * 
     * // Get first 10 ModelImages
     * const modelImages = await prisma.modelImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelImageWithIdOnly = await prisma.modelImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelImageFindManyArgs>(args?: SelectSubset<T, ModelImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelImage.
     * @param {ModelImageCreateArgs} args - Arguments to create a ModelImage.
     * @example
     * // Create one ModelImage
     * const ModelImage = await prisma.modelImage.create({
     *   data: {
     *     // ... data to create a ModelImage
     *   }
     * })
     * 
     */
    create<T extends ModelImageCreateArgs>(args: SelectSubset<T, ModelImageCreateArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelImages.
     * @param {ModelImageCreateManyArgs} args - Arguments to create many ModelImages.
     * @example
     * // Create many ModelImages
     * const modelImage = await prisma.modelImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelImageCreateManyArgs>(args?: SelectSubset<T, ModelImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ModelImage.
     * @param {ModelImageDeleteArgs} args - Arguments to delete one ModelImage.
     * @example
     * // Delete one ModelImage
     * const ModelImage = await prisma.modelImage.delete({
     *   where: {
     *     // ... filter to delete one ModelImage
     *   }
     * })
     * 
     */
    delete<T extends ModelImageDeleteArgs>(args: SelectSubset<T, ModelImageDeleteArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelImage.
     * @param {ModelImageUpdateArgs} args - Arguments to update one ModelImage.
     * @example
     * // Update one ModelImage
     * const modelImage = await prisma.modelImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelImageUpdateArgs>(args: SelectSubset<T, ModelImageUpdateArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelImages.
     * @param {ModelImageDeleteManyArgs} args - Arguments to filter ModelImages to delete.
     * @example
     * // Delete a few ModelImages
     * const { count } = await prisma.modelImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelImageDeleteManyArgs>(args?: SelectSubset<T, ModelImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelImages
     * const modelImage = await prisma.modelImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelImageUpdateManyArgs>(args: SelectSubset<T, ModelImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ModelImage.
     * @param {ModelImageUpsertArgs} args - Arguments to update or create a ModelImage.
     * @example
     * // Update or create a ModelImage
     * const modelImage = await prisma.modelImage.upsert({
     *   create: {
     *     // ... data to create a ModelImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelImage we want to update
     *   }
     * })
     */
    upsert<T extends ModelImageUpsertArgs>(args: SelectSubset<T, ModelImageUpsertArgs<ExtArgs>>): Prisma__ModelImageClient<$Result.GetResult<Prisma.$ModelImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageCountArgs} args - Arguments to filter ModelImages to count.
     * @example
     * // Count the number of ModelImages
     * const count = await prisma.modelImage.count({
     *   where: {
     *     // ... the filter for the ModelImages we want to count
     *   }
     * })
    **/
    count<T extends ModelImageCountArgs>(
      args?: Subset<T, ModelImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelImageAggregateArgs>(args: Subset<T, ModelImageAggregateArgs>): Prisma.PrismaPromise<GetModelImageAggregateType<T>>

    /**
     * Group by ModelImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelImageGroupByArgs['orderBy'] }
        : { orderBy?: ModelImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelImage model
   */
  readonly fields: ModelImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelImage model
   */
  interface ModelImageFieldRefs {
    readonly id: FieldRef<"ModelImage", 'Int'>
    readonly image: FieldRef<"ModelImage", 'Json'>
    readonly modelId: FieldRef<"ModelImage", 'Int'>
    readonly createdAt: FieldRef<"ModelImage", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelImage findUnique
   */
  export type ModelImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter, which ModelImage to fetch.
     */
    where: ModelImageWhereUniqueInput
  }

  /**
   * ModelImage findUniqueOrThrow
   */
  export type ModelImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter, which ModelImage to fetch.
     */
    where: ModelImageWhereUniqueInput
  }

  /**
   * ModelImage findFirst
   */
  export type ModelImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter, which ModelImage to fetch.
     */
    where?: ModelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelImages to fetch.
     */
    orderBy?: ModelImageOrderByWithRelationInput | ModelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelImages.
     */
    cursor?: ModelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelImages.
     */
    distinct?: ModelImageScalarFieldEnum | ModelImageScalarFieldEnum[]
  }

  /**
   * ModelImage findFirstOrThrow
   */
  export type ModelImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter, which ModelImage to fetch.
     */
    where?: ModelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelImages to fetch.
     */
    orderBy?: ModelImageOrderByWithRelationInput | ModelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelImages.
     */
    cursor?: ModelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelImages.
     */
    distinct?: ModelImageScalarFieldEnum | ModelImageScalarFieldEnum[]
  }

  /**
   * ModelImage findMany
   */
  export type ModelImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter, which ModelImages to fetch.
     */
    where?: ModelImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelImages to fetch.
     */
    orderBy?: ModelImageOrderByWithRelationInput | ModelImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelImages.
     */
    cursor?: ModelImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelImages.
     */
    skip?: number
    distinct?: ModelImageScalarFieldEnum | ModelImageScalarFieldEnum[]
  }

  /**
   * ModelImage create
   */
  export type ModelImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelImage.
     */
    data: XOR<ModelImageCreateInput, ModelImageUncheckedCreateInput>
  }

  /**
   * ModelImage createMany
   */
  export type ModelImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelImages.
     */
    data: ModelImageCreateManyInput | ModelImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelImage update
   */
  export type ModelImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelImage.
     */
    data: XOR<ModelImageUpdateInput, ModelImageUncheckedUpdateInput>
    /**
     * Choose, which ModelImage to update.
     */
    where: ModelImageWhereUniqueInput
  }

  /**
   * ModelImage updateMany
   */
  export type ModelImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelImages.
     */
    data: XOR<ModelImageUpdateManyMutationInput, ModelImageUncheckedUpdateManyInput>
    /**
     * Filter which ModelImages to update
     */
    where?: ModelImageWhereInput
    /**
     * Limit how many ModelImages to update.
     */
    limit?: number
  }

  /**
   * ModelImage upsert
   */
  export type ModelImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelImage to update in case it exists.
     */
    where: ModelImageWhereUniqueInput
    /**
     * In case the ModelImage found by the `where` argument doesn't exist, create a new ModelImage with this data.
     */
    create: XOR<ModelImageCreateInput, ModelImageUncheckedCreateInput>
    /**
     * In case the ModelImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelImageUpdateInput, ModelImageUncheckedUpdateInput>
  }

  /**
   * ModelImage delete
   */
  export type ModelImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
    /**
     * Filter which ModelImage to delete.
     */
    where: ModelImageWhereUniqueInput
  }

  /**
   * ModelImage deleteMany
   */
  export type ModelImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelImages to delete
     */
    where?: ModelImageWhereInput
    /**
     * Limit how many ModelImages to delete.
     */
    limit?: number
  }

  /**
   * ModelImage without action
   */
  export type ModelImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelImage
     */
    select?: ModelImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelImage
     */
    omit?: ModelImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelImageInclude<ExtArgs> | null
  }


  /**
   * Model Hotels
   */

  export type AggregateHotels = {
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  export type HotelsAvgAggregateOutputType = {
    id: number | null
  }

  export type HotelsSumAggregateOutputType = {
    id: number | null
  }

  export type HotelsMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    city: string | null
    state: string | null
    country: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
    description: string | null
    city: string | null
    state: string | null
    country: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelsCountAggregateOutputType = {
    id: number
    name: number
    location: number
    description: number
    city: number
    state: number
    country: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelsAvgAggregateInputType = {
    id?: true
  }

  export type HotelsSumAggregateInputType = {
    id?: true
  }

  export type HotelsMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelsMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelsCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    description?: true
    city?: true
    state?: true
    country?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to aggregate.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hotels
    **/
    _count?: true | HotelsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HotelsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HotelsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelsMaxAggregateInputType
  }

  export type GetHotelsAggregateType<T extends HotelsAggregateArgs> = {
        [P in keyof T & keyof AggregateHotels]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotels[P]>
      : GetScalarType<T[P], AggregateHotels[P]>
  }




  export type HotelsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelsWhereInput
    orderBy?: HotelsOrderByWithAggregationInput | HotelsOrderByWithAggregationInput[]
    by: HotelsScalarFieldEnum[] | HotelsScalarFieldEnum
    having?: HotelsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelsCountAggregateInputType | true
    _avg?: HotelsAvgAggregateInputType
    _sum?: HotelsSumAggregateInputType
    _min?: HotelsMinAggregateInputType
    _max?: HotelsMaxAggregateInputType
  }

  export type HotelsGroupByOutputType = {
    id: number
    name: string
    location: string
    description: string | null
    city: string
    state: string
    country: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: HotelsCountAggregateOutputType | null
    _avg: HotelsAvgAggregateOutputType | null
    _sum: HotelsSumAggregateOutputType | null
    _min: HotelsMinAggregateOutputType | null
    _max: HotelsMaxAggregateOutputType | null
  }

  type GetHotelsGroupByPayload<T extends HotelsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelsGroupByOutputType[P]>
            : GetScalarType<T[P], HotelsGroupByOutputType[P]>
        }
      >
    >


  export type HotelsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hotels"]>



  export type HotelsSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    description?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "description" | "city" | "state" | "country" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["hotels"]>

  export type $HotelsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hotels"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string
      description: string | null
      city: string
      state: string
      country: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotels"]>
    composites: {}
  }

  type HotelsGetPayload<S extends boolean | null | undefined | HotelsDefaultArgs> = $Result.GetResult<Prisma.$HotelsPayload, S>

  type HotelsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HotelsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HotelsCountAggregateInputType | true
    }

  export interface HotelsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hotels'], meta: { name: 'Hotels' } }
    /**
     * Find zero or one Hotels that matches the filter.
     * @param {HotelsFindUniqueArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelsFindUniqueArgs>(args: SelectSubset<T, HotelsFindUniqueArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hotels that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HotelsFindUniqueOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelsFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelsFindFirstArgs>(args?: SelectSubset<T, HotelsFindFirstArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hotels that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindFirstOrThrowArgs} args - Arguments to find a Hotels
     * @example
     * // Get one Hotels
     * const hotels = await prisma.hotels.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelsFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hotels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hotels
     * const hotels = await prisma.hotels.findMany()
     * 
     * // Get first 10 Hotels
     * const hotels = await prisma.hotels.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelsWithIdOnly = await prisma.hotels.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelsFindManyArgs>(args?: SelectSubset<T, HotelsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hotels.
     * @param {HotelsCreateArgs} args - Arguments to create a Hotels.
     * @example
     * // Create one Hotels
     * const Hotels = await prisma.hotels.create({
     *   data: {
     *     // ... data to create a Hotels
     *   }
     * })
     * 
     */
    create<T extends HotelsCreateArgs>(args: SelectSubset<T, HotelsCreateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hotels.
     * @param {HotelsCreateManyArgs} args - Arguments to create many Hotels.
     * @example
     * // Create many Hotels
     * const hotels = await prisma.hotels.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelsCreateManyArgs>(args?: SelectSubset<T, HotelsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hotels.
     * @param {HotelsDeleteArgs} args - Arguments to delete one Hotels.
     * @example
     * // Delete one Hotels
     * const Hotels = await prisma.hotels.delete({
     *   where: {
     *     // ... filter to delete one Hotels
     *   }
     * })
     * 
     */
    delete<T extends HotelsDeleteArgs>(args: SelectSubset<T, HotelsDeleteArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hotels.
     * @param {HotelsUpdateArgs} args - Arguments to update one Hotels.
     * @example
     * // Update one Hotels
     * const hotels = await prisma.hotels.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelsUpdateArgs>(args: SelectSubset<T, HotelsUpdateArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hotels.
     * @param {HotelsDeleteManyArgs} args - Arguments to filter Hotels to delete.
     * @example
     * // Delete a few Hotels
     * const { count } = await prisma.hotels.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelsDeleteManyArgs>(args?: SelectSubset<T, HotelsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hotels
     * const hotels = await prisma.hotels.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelsUpdateManyArgs>(args: SelectSubset<T, HotelsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hotels.
     * @param {HotelsUpsertArgs} args - Arguments to update or create a Hotels.
     * @example
     * // Update or create a Hotels
     * const hotels = await prisma.hotels.upsert({
     *   create: {
     *     // ... data to create a Hotels
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hotels we want to update
     *   }
     * })
     */
    upsert<T extends HotelsUpsertArgs>(args: SelectSubset<T, HotelsUpsertArgs<ExtArgs>>): Prisma__HotelsClient<$Result.GetResult<Prisma.$HotelsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsCountArgs} args - Arguments to filter Hotels to count.
     * @example
     * // Count the number of Hotels
     * const count = await prisma.hotels.count({
     *   where: {
     *     // ... the filter for the Hotels we want to count
     *   }
     * })
    **/
    count<T extends HotelsCountArgs>(
      args?: Subset<T, HotelsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelsAggregateArgs>(args: Subset<T, HotelsAggregateArgs>): Prisma.PrismaPromise<GetHotelsAggregateType<T>>

    /**
     * Group by Hotels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelsGroupByArgs['orderBy'] }
        : { orderBy?: HotelsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hotels model
   */
  readonly fields: HotelsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hotels.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hotels model
   */
  interface HotelsFieldRefs {
    readonly id: FieldRef<"Hotels", 'Int'>
    readonly name: FieldRef<"Hotels", 'String'>
    readonly location: FieldRef<"Hotels", 'String'>
    readonly description: FieldRef<"Hotels", 'String'>
    readonly city: FieldRef<"Hotels", 'String'>
    readonly state: FieldRef<"Hotels", 'String'>
    readonly country: FieldRef<"Hotels", 'String'>
    readonly isActive: FieldRef<"Hotels", 'Boolean'>
    readonly createdAt: FieldRef<"Hotels", 'DateTime'>
    readonly updatedAt: FieldRef<"Hotels", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hotels findUnique
   */
  export type HotelsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findUniqueOrThrow
   */
  export type HotelsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels findFirst
   */
  export type HotelsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findFirstOrThrow
   */
  export type HotelsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hotels.
     */
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels findMany
   */
  export type HotelsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter, which Hotels to fetch.
     */
    where?: HotelsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hotels to fetch.
     */
    orderBy?: HotelsOrderByWithRelationInput | HotelsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hotels.
     */
    cursor?: HotelsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hotels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hotels.
     */
    skip?: number
    distinct?: HotelsScalarFieldEnum | HotelsScalarFieldEnum[]
  }

  /**
   * Hotels create
   */
  export type HotelsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data needed to create a Hotels.
     */
    data: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
  }

  /**
   * Hotels createMany
   */
  export type HotelsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hotels.
     */
    data: HotelsCreateManyInput | HotelsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hotels update
   */
  export type HotelsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The data needed to update a Hotels.
     */
    data: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
    /**
     * Choose, which Hotels to update.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels updateMany
   */
  export type HotelsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hotels.
     */
    data: XOR<HotelsUpdateManyMutationInput, HotelsUncheckedUpdateManyInput>
    /**
     * Filter which Hotels to update
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to update.
     */
    limit?: number
  }

  /**
   * Hotels upsert
   */
  export type HotelsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * The filter to search for the Hotels to update in case it exists.
     */
    where: HotelsWhereUniqueInput
    /**
     * In case the Hotels found by the `where` argument doesn't exist, create a new Hotels with this data.
     */
    create: XOR<HotelsCreateInput, HotelsUncheckedCreateInput>
    /**
     * In case the Hotels was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelsUpdateInput, HotelsUncheckedUpdateInput>
  }

  /**
   * Hotels delete
   */
  export type HotelsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
    /**
     * Filter which Hotels to delete.
     */
    where: HotelsWhereUniqueInput
  }

  /**
   * Hotels deleteMany
   */
  export type HotelsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hotels to delete
     */
    where?: HotelsWhereInput
    /**
     * Limit how many Hotels to delete.
     */
    limit?: number
  }

  /**
   * Hotels without action
   */
  export type HotelsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hotels
     */
    select?: HotelsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hotels
     */
    omit?: HotelsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    age: 'age',
    email: 'email',
    phone: 'phone',
    whatsapp: 'whatsapp',
    address: 'address',
    service: 'service',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const ModelImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    modelId: 'modelId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelImageScalarFieldEnum = (typeof ModelImageScalarFieldEnum)[keyof typeof ModelImageScalarFieldEnum]


  export const HotelsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    description: 'description',
    city: 'city',
    state: 'state',
    country: 'country',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelsScalarFieldEnum = (typeof HotelsScalarFieldEnum)[keyof typeof HotelsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const AdminOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ModelOrderByRelevanceFieldEnum: {
    name: 'name',
    age: 'age',
    email: 'email',
    phone: 'phone',
    whatsapp: 'whatsapp',
    address: 'address',
    service: 'service'
  };

  export type ModelOrderByRelevanceFieldEnum = (typeof ModelOrderByRelevanceFieldEnum)[keyof typeof ModelOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const HotelsOrderByRelevanceFieldEnum: {
    name: 'name',
    location: 'location',
    description: 'description',
    city: 'city',
    state: 'state',
    country: 'country'
  };

  export type HotelsOrderByRelevanceFieldEnum = (typeof HotelsOrderByRelevanceFieldEnum)[keyof typeof HotelsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: IntFilter<"Model"> | number
    name?: StringFilter<"Model"> | string
    age?: StringFilter<"Model"> | string
    email?: StringNullableFilter<"Model"> | string | null
    phone?: StringNullableFilter<"Model"> | string | null
    whatsapp?: StringNullableFilter<"Model"> | string | null
    address?: StringNullableFilter<"Model"> | string | null
    service?: StringNullableFilter<"Model"> | string | null
    isActive?: BoolFilter<"Model"> | boolean
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    image?: ModelImageListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ModelImageOrderByRelationAggregateInput
    _relevance?: ModelOrderByRelevanceInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    name?: StringFilter<"Model"> | string
    age?: StringFilter<"Model"> | string
    whatsapp?: StringNullableFilter<"Model"> | string | null
    address?: StringNullableFilter<"Model"> | string | null
    service?: StringNullableFilter<"Model"> | string | null
    isActive?: BoolFilter<"Model"> | boolean
    createdAt?: DateTimeFilter<"Model"> | Date | string
    updatedAt?: DateTimeFilter<"Model"> | Date | string
    image?: ModelImageListRelationFilter
  }, "id" | "email" | "phone">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    whatsapp?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    service?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Model"> | number
    name?: StringWithAggregatesFilter<"Model"> | string
    age?: StringWithAggregatesFilter<"Model"> | string
    email?: StringNullableWithAggregatesFilter<"Model"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Model"> | string | null
    whatsapp?: StringNullableWithAggregatesFilter<"Model"> | string | null
    address?: StringNullableWithAggregatesFilter<"Model"> | string | null
    service?: StringNullableWithAggregatesFilter<"Model"> | string | null
    isActive?: BoolWithAggregatesFilter<"Model"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string
  }

  export type ModelImageWhereInput = {
    AND?: ModelImageWhereInput | ModelImageWhereInput[]
    OR?: ModelImageWhereInput[]
    NOT?: ModelImageWhereInput | ModelImageWhereInput[]
    id?: IntFilter<"ModelImage"> | number
    image?: JsonNullableFilter<"ModelImage">
    modelId?: IntFilter<"ModelImage"> | number
    createdAt?: DateTimeFilter<"ModelImage"> | Date | string
    updatedAt?: DateTimeFilter<"ModelImage"> | Date | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }

  export type ModelImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    model?: ModelOrderByWithRelationInput
  }

  export type ModelImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelImageWhereInput | ModelImageWhereInput[]
    OR?: ModelImageWhereInput[]
    NOT?: ModelImageWhereInput | ModelImageWhereInput[]
    image?: JsonNullableFilter<"ModelImage">
    modelId?: IntFilter<"ModelImage"> | number
    createdAt?: DateTimeFilter<"ModelImage"> | Date | string
    updatedAt?: DateTimeFilter<"ModelImage"> | Date | string
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput>
  }, "id">

  export type ModelImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrderInput | SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelImageCountOrderByAggregateInput
    _avg?: ModelImageAvgOrderByAggregateInput
    _max?: ModelImageMaxOrderByAggregateInput
    _min?: ModelImageMinOrderByAggregateInput
    _sum?: ModelImageSumOrderByAggregateInput
  }

  export type ModelImageScalarWhereWithAggregatesInput = {
    AND?: ModelImageScalarWhereWithAggregatesInput | ModelImageScalarWhereWithAggregatesInput[]
    OR?: ModelImageScalarWhereWithAggregatesInput[]
    NOT?: ModelImageScalarWhereWithAggregatesInput | ModelImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ModelImage"> | number
    image?: JsonNullableWithAggregatesFilter<"ModelImage">
    modelId?: IntWithAggregatesFilter<"ModelImage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ModelImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelImage"> | Date | string
  }

  export type HotelsWhereInput = {
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    id?: IntFilter<"Hotels"> | number
    name?: StringFilter<"Hotels"> | string
    location?: StringFilter<"Hotels"> | string
    description?: StringNullableFilter<"Hotels"> | string | null
    city?: StringFilter<"Hotels"> | string
    state?: StringFilter<"Hotels"> | string
    country?: StringNullableFilter<"Hotels"> | string | null
    isActive?: BoolFilter<"Hotels"> | boolean
    createdAt?: DateTimeFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeFilter<"Hotels"> | Date | string
  }

  export type HotelsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: HotelsOrderByRelevanceInput
  }

  export type HotelsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HotelsWhereInput | HotelsWhereInput[]
    OR?: HotelsWhereInput[]
    NOT?: HotelsWhereInput | HotelsWhereInput[]
    name?: StringFilter<"Hotels"> | string
    location?: StringFilter<"Hotels"> | string
    description?: StringNullableFilter<"Hotels"> | string | null
    city?: StringFilter<"Hotels"> | string
    state?: StringFilter<"Hotels"> | string
    country?: StringNullableFilter<"Hotels"> | string | null
    isActive?: BoolFilter<"Hotels"> | boolean
    createdAt?: DateTimeFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeFilter<"Hotels"> | Date | string
  }, "id">

  export type HotelsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelsCountOrderByAggregateInput
    _avg?: HotelsAvgOrderByAggregateInput
    _max?: HotelsMaxOrderByAggregateInput
    _min?: HotelsMinOrderByAggregateInput
    _sum?: HotelsSumOrderByAggregateInput
  }

  export type HotelsScalarWhereWithAggregatesInput = {
    AND?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    OR?: HotelsScalarWhereWithAggregatesInput[]
    NOT?: HotelsScalarWhereWithAggregatesInput | HotelsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Hotels"> | number
    name?: StringWithAggregatesFilter<"Hotels"> | string
    location?: StringWithAggregatesFilter<"Hotels"> | string
    description?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    city?: StringWithAggregatesFilter<"Hotels"> | string
    state?: StringWithAggregatesFilter<"Hotels"> | string
    country?: StringNullableWithAggregatesFilter<"Hotels"> | string | null
    isActive?: BoolWithAggregatesFilter<"Hotels"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Hotels"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hotels"> | Date | string
  }

  export type AdminCreateInput = {
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelCreateInput = {
    name: string
    age: string
    email?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    service?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ModelImageCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: number
    name: string
    age: string
    email?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    service?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    image?: ModelImageUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ModelImageUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ModelImageUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: number
    name: string
    age: string
    email?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    service?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageCreateInput = {
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    model: ModelCreateNestedOneWithoutImageInput
  }

  export type ModelImageUncheckedCreateInput = {
    id?: number
    image?: NullableJsonNullValueInput | InputJsonValue
    modelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelImageUpdateInput = {
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ModelUpdateOneRequiredWithoutImageNestedInput
  }

  export type ModelImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableJsonNullValueInput | InputJsonValue
    modelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageCreateManyInput = {
    id?: number
    image?: NullableJsonNullValueInput | InputJsonValue
    modelId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelImageUpdateManyMutationInput = {
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableJsonNullValueInput | InputJsonValue
    modelId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsCreateInput = {
    name: string
    location: string
    description?: string | null
    city: string
    state: string
    country?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsUncheckedCreateInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    city: string
    state: string
    country?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsCreateManyInput = {
    id?: number
    name: string
    location: string
    description?: string | null
    city: string
    state: string
    country?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModelImageListRelationFilter = {
    every?: ModelImageWhereInput
    some?: ModelImageWhereInput
    none?: ModelImageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ModelImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelOrderByRelevanceInput = {
    fields: ModelOrderByRelevanceFieldEnum | ModelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    service?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    service?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    age?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    whatsapp?: SortOrder
    address?: SortOrder
    service?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ModelScalarRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type ModelImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelImageAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type ModelImageMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelImageMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelImageSumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type HotelsOrderByRelevanceInput = {
    fields: HotelsOrderByRelevanceFieldEnum | HotelsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HotelsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HotelsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    description?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ModelImageCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput> | ModelImageCreateWithoutModelInput[] | ModelImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelImageCreateOrConnectWithoutModelInput | ModelImageCreateOrConnectWithoutModelInput[]
    createMany?: ModelImageCreateManyModelInputEnvelope
    connect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
  }

  export type ModelImageUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput> | ModelImageCreateWithoutModelInput[] | ModelImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelImageCreateOrConnectWithoutModelInput | ModelImageCreateOrConnectWithoutModelInput[]
    createMany?: ModelImageCreateManyModelInputEnvelope
    connect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModelImageUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput> | ModelImageCreateWithoutModelInput[] | ModelImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelImageCreateOrConnectWithoutModelInput | ModelImageCreateOrConnectWithoutModelInput[]
    upsert?: ModelImageUpsertWithWhereUniqueWithoutModelInput | ModelImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelImageCreateManyModelInputEnvelope
    set?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    disconnect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    delete?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    connect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    update?: ModelImageUpdateWithWhereUniqueWithoutModelInput | ModelImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelImageUpdateManyWithWhereWithoutModelInput | ModelImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelImageScalarWhereInput | ModelImageScalarWhereInput[]
  }

  export type ModelImageUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput> | ModelImageCreateWithoutModelInput[] | ModelImageUncheckedCreateWithoutModelInput[]
    connectOrCreate?: ModelImageCreateOrConnectWithoutModelInput | ModelImageCreateOrConnectWithoutModelInput[]
    upsert?: ModelImageUpsertWithWhereUniqueWithoutModelInput | ModelImageUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: ModelImageCreateManyModelInputEnvelope
    set?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    disconnect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    delete?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    connect?: ModelImageWhereUniqueInput | ModelImageWhereUniqueInput[]
    update?: ModelImageUpdateWithWhereUniqueWithoutModelInput | ModelImageUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: ModelImageUpdateManyWithWhereWithoutModelInput | ModelImageUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: ModelImageScalarWhereInput | ModelImageScalarWhereInput[]
  }

  export type ModelCreateNestedOneWithoutImageInput = {
    create?: XOR<ModelCreateWithoutImageInput, ModelUncheckedCreateWithoutImageInput>
    connectOrCreate?: ModelCreateOrConnectWithoutImageInput
    connect?: ModelWhereUniqueInput
  }

  export type ModelUpdateOneRequiredWithoutImageNestedInput = {
    create?: XOR<ModelCreateWithoutImageInput, ModelUncheckedCreateWithoutImageInput>
    connectOrCreate?: ModelCreateOrConnectWithoutImageInput
    upsert?: ModelUpsertWithoutImageInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutImageInput, ModelUpdateWithoutImageInput>, ModelUncheckedUpdateWithoutImageInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ModelImageCreateWithoutModelInput = {
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelImageUncheckedCreateWithoutModelInput = {
    id?: number
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelImageCreateOrConnectWithoutModelInput = {
    where: ModelImageWhereUniqueInput
    create: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput>
  }

  export type ModelImageCreateManyModelInputEnvelope = {
    data: ModelImageCreateManyModelInput | ModelImageCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type ModelImageUpsertWithWhereUniqueWithoutModelInput = {
    where: ModelImageWhereUniqueInput
    update: XOR<ModelImageUpdateWithoutModelInput, ModelImageUncheckedUpdateWithoutModelInput>
    create: XOR<ModelImageCreateWithoutModelInput, ModelImageUncheckedCreateWithoutModelInput>
  }

  export type ModelImageUpdateWithWhereUniqueWithoutModelInput = {
    where: ModelImageWhereUniqueInput
    data: XOR<ModelImageUpdateWithoutModelInput, ModelImageUncheckedUpdateWithoutModelInput>
  }

  export type ModelImageUpdateManyWithWhereWithoutModelInput = {
    where: ModelImageScalarWhereInput
    data: XOR<ModelImageUpdateManyMutationInput, ModelImageUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelImageScalarWhereInput = {
    AND?: ModelImageScalarWhereInput | ModelImageScalarWhereInput[]
    OR?: ModelImageScalarWhereInput[]
    NOT?: ModelImageScalarWhereInput | ModelImageScalarWhereInput[]
    id?: IntFilter<"ModelImage"> | number
    image?: JsonNullableFilter<"ModelImage">
    modelId?: IntFilter<"ModelImage"> | number
    createdAt?: DateTimeFilter<"ModelImage"> | Date | string
    updatedAt?: DateTimeFilter<"ModelImage"> | Date | string
  }

  export type ModelCreateWithoutImageInput = {
    name: string
    age: string
    email?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    service?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelUncheckedCreateWithoutImageInput = {
    id?: number
    name: string
    age: string
    email?: string | null
    phone?: string | null
    whatsapp?: string | null
    address?: string | null
    service?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelCreateOrConnectWithoutImageInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutImageInput, ModelUncheckedCreateWithoutImageInput>
  }

  export type ModelUpsertWithoutImageInput = {
    update: XOR<ModelUpdateWithoutImageInput, ModelUncheckedUpdateWithoutImageInput>
    create: XOR<ModelCreateWithoutImageInput, ModelUncheckedCreateWithoutImageInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutImageInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutImageInput, ModelUncheckedUpdateWithoutImageInput>
  }

  export type ModelUpdateWithoutImageInput = {
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    service?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageCreateManyModelInput = {
    id?: number
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelImageUpdateWithoutModelInput = {
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelImageUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}