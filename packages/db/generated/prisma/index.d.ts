
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model websiteTick
 * 
 */
export type websiteTick = $Result.DefaultSelection<Prisma.$websiteTickPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WebsiteStatus: {
  Up: 'Up',
  Down: 'Down',
  Unknown: 'Unknown'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]

}

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteTick`: Exposes CRUD operations for the **websiteTick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteTicks
    * const websiteTicks = await prisma.websiteTick.findMany()
    * ```
    */
  get websiteTick(): Prisma.websiteTickDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Website: 'Website',
    Region: 'Region',
    websiteTick: 'websiteTick'
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
      modelProps: "user" | "website" | "region" | "websiteTick"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      websiteTick: {
        payload: Prisma.$websiteTickPayload<ExtArgs>
        fields: Prisma.websiteTickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.websiteTickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.websiteTickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          findFirst: {
            args: Prisma.websiteTickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.websiteTickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          findMany: {
            args: Prisma.websiteTickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>[]
          }
          create: {
            args: Prisma.websiteTickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          createMany: {
            args: Prisma.websiteTickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.websiteTickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>[]
          }
          delete: {
            args: Prisma.websiteTickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          update: {
            args: Prisma.websiteTickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          deleteMany: {
            args: Prisma.websiteTickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.websiteTickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.websiteTickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>[]
          }
          upsert: {
            args: Prisma.websiteTickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$websiteTickPayload>
          }
          aggregate: {
            args: Prisma.WebsiteTickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteTick>
          }
          groupBy: {
            args: Prisma.websiteTickGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickGroupByOutputType>[]
          }
          count: {
            args: Prisma.websiteTickCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    website?: WebsiteOmit
    region?: RegionOmit
    websiteTick?: websiteTickOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    websites: number
    regions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    websites?: boolean | UserCountOutputTypeCountWebsitesArgs
    regions?: boolean | UserCountOutputTypeCountRegionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
  }


  /**
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    ticks: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | WebsiteCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: websiteTickWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    ticks: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | RegionCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: websiteTickWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    websites?: boolean | User$websitesArgs<ExtArgs>
    regions?: boolean | User$regionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    websites?: boolean | User$websitesArgs<ExtArgs>
    regions?: boolean | User$regionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      websites: Prisma.$WebsitePayload<ExtArgs>[]
      regions: Prisma.$RegionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    websites<T extends User$websitesArgs<ExtArgs> = {}>(args?: Subset<T, User$websitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    regions<T extends User$regionsArgs<ExtArgs> = {}>(args?: Subset<T, User$regionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.websites
   */
  export type User$websitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    cursor?: WebsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * User.regions
   */
  export type User$regionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    cursor?: RegionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    url: string | null
    timeAdded: Date | null
    userId: string | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    url: string | null
    timeAdded: Date | null
    userId: string | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    url: number
    timeAdded: number
    userId: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
    userId?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
    userId?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    url?: true
    timeAdded?: true
    userId?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    url: string
    timeAdded: Date
    userId: string | null
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
    userId?: boolean
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    user?: boolean | Website$userArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
    userId?: boolean
    user?: boolean | Website$userArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    timeAdded?: boolean
    userId?: boolean
    user?: boolean | Website$userArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    url?: boolean
    timeAdded?: boolean
    userId?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "timeAdded" | "userId", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    user?: boolean | Website$userArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Website$userArgs<ExtArgs>
  }
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Website$userArgs<ExtArgs>
  }

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      ticks: Prisma.$websiteTickPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      timeAdded: Date
      userId: string | null
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
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
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticks<T extends Website$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Website$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Website$userArgs<ExtArgs> = {}>(args?: Subset<T, Website$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Website model
   */
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly url: FieldRef<"Website", 'String'>
    readonly timeAdded: FieldRef<"Website", 'DateTime'>
    readonly userId: FieldRef<"Website", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.ticks
   */
  export type Website$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    where?: websiteTickWhereInput
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    cursor?: websiteTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * Website.user
   */
  export type Website$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    timeAdded: Date | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    user_id: string | null
    timeAdded: Date | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    timeAdded: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    timeAdded?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    timeAdded?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    timeAdded?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name: string
    user_id: string
    timeAdded: Date
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    timeAdded?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticks?: boolean | Region$ticksArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    timeAdded?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    timeAdded?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    timeAdded?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "user_id" | "timeAdded", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticks?: boolean | Region$ticksArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ticks: Prisma.$websiteTickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      user_id: string
      timeAdded: Date
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticks<T extends Region$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Region$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
    readonly user_id: FieldRef<"Region", 'String'>
    readonly timeAdded: FieldRef<"Region", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.ticks
   */
  export type Region$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    where?: websiteTickWhereInput
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    cursor?: websiteTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model websiteTick
   */

  export type AggregateWebsiteTick = {
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  export type WebsiteTickAvgAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickSumAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickMinAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    createdAt: Date | null
    region_id: string | null
    website_id: string | null
  }

  export type WebsiteTickMaxAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    createdAt: Date | null
    region_id: string | null
    website_id: string | null
  }

  export type WebsiteTickCountAggregateOutputType = {
    id: number
    response_time_ms: number
    status: number
    createdAt: number
    region_id: number
    website_id: number
    _all: number
  }


  export type WebsiteTickAvgAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickSumAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickMinAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    createdAt?: true
    region_id?: true
    website_id?: true
  }

  export type WebsiteTickMaxAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    createdAt?: true
    region_id?: true
    website_id?: true
  }

  export type WebsiteTickCountAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    createdAt?: true
    region_id?: true
    website_id?: true
    _all?: true
  }

  export type WebsiteTickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which websiteTick to aggregate.
     */
    where?: websiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websiteTicks to fetch.
     */
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: websiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned websiteTicks
    **/
    _count?: true | WebsiteTickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteTickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteTickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteTickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type GetWebsiteTickAggregateType<T extends WebsiteTickAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteTick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteTick[P]>
      : GetScalarType<T[P], AggregateWebsiteTick[P]>
  }




  export type websiteTickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: websiteTickWhereInput
    orderBy?: websiteTickOrderByWithAggregationInput | websiteTickOrderByWithAggregationInput[]
    by: WebsiteTickScalarFieldEnum[] | WebsiteTickScalarFieldEnum
    having?: websiteTickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteTickCountAggregateInputType | true
    _avg?: WebsiteTickAvgAggregateInputType
    _sum?: WebsiteTickSumAggregateInputType
    _min?: WebsiteTickMinAggregateInputType
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type WebsiteTickGroupByOutputType = {
    id: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt: Date
    region_id: string
    website_id: string
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  type GetWebsiteTickGroupByPayload<T extends websiteTickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteTickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteTickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
        }
      >
    >


  export type websiteTickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    createdAt?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type websiteTickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    createdAt?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type websiteTickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    createdAt?: boolean
    region_id?: boolean
    website_id?: boolean
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type websiteTickSelectScalar = {
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    createdAt?: boolean
    region_id?: boolean
    website_id?: boolean
  }

  export type websiteTickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "response_time_ms" | "status" | "createdAt" | "region_id" | "website_id", ExtArgs["result"]["websiteTick"]>
  export type websiteTickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type websiteTickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type websiteTickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | RegionDefaultArgs<ExtArgs>
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $websiteTickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "websiteTick"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs>
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      response_time_ms: number
      status: $Enums.WebsiteStatus
      createdAt: Date
      region_id: string
      website_id: string
    }, ExtArgs["result"]["websiteTick"]>
    composites: {}
  }

  type websiteTickGetPayload<S extends boolean | null | undefined | websiteTickDefaultArgs> = $Result.GetResult<Prisma.$websiteTickPayload, S>

  type websiteTickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<websiteTickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteTickCountAggregateInputType | true
    }

  export interface websiteTickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['websiteTick'], meta: { name: 'websiteTick' } }
    /**
     * Find zero or one WebsiteTick that matches the filter.
     * @param {websiteTickFindUniqueArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends websiteTickFindUniqueArgs>(args: SelectSubset<T, websiteTickFindUniqueArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteTick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {websiteTickFindUniqueOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends websiteTickFindUniqueOrThrowArgs>(args: SelectSubset<T, websiteTickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickFindFirstArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends websiteTickFindFirstArgs>(args?: SelectSubset<T, websiteTickFindFirstArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickFindFirstOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends websiteTickFindFirstOrThrowArgs>(args?: SelectSubset<T, websiteTickFindFirstOrThrowArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany()
     * 
     * // Get first 10 WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends websiteTickFindManyArgs>(args?: SelectSubset<T, websiteTickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteTick.
     * @param {websiteTickCreateArgs} args - Arguments to create a WebsiteTick.
     * @example
     * // Create one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.create({
     *   data: {
     *     // ... data to create a WebsiteTick
     *   }
     * })
     * 
     */
    create<T extends websiteTickCreateArgs>(args: SelectSubset<T, websiteTickCreateArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteTicks.
     * @param {websiteTickCreateManyArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends websiteTickCreateManyArgs>(args?: SelectSubset<T, websiteTickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteTicks and returns the data saved in the database.
     * @param {websiteTickCreateManyAndReturnArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends websiteTickCreateManyAndReturnArgs>(args?: SelectSubset<T, websiteTickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteTick.
     * @param {websiteTickDeleteArgs} args - Arguments to delete one WebsiteTick.
     * @example
     * // Delete one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.delete({
     *   where: {
     *     // ... filter to delete one WebsiteTick
     *   }
     * })
     * 
     */
    delete<T extends websiteTickDeleteArgs>(args: SelectSubset<T, websiteTickDeleteArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteTick.
     * @param {websiteTickUpdateArgs} args - Arguments to update one WebsiteTick.
     * @example
     * // Update one WebsiteTick
     * const websiteTick = await prisma.websiteTick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends websiteTickUpdateArgs>(args: SelectSubset<T, websiteTickUpdateArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteTicks.
     * @param {websiteTickDeleteManyArgs} args - Arguments to filter WebsiteTicks to delete.
     * @example
     * // Delete a few WebsiteTicks
     * const { count } = await prisma.websiteTick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends websiteTickDeleteManyArgs>(args?: SelectSubset<T, websiteTickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends websiteTickUpdateManyArgs>(args: SelectSubset<T, websiteTickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks and returns the data updated in the database.
     * @param {websiteTickUpdateManyAndReturnArgs} args - Arguments to update many WebsiteTicks.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends websiteTickUpdateManyAndReturnArgs>(args: SelectSubset<T, websiteTickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteTick.
     * @param {websiteTickUpsertArgs} args - Arguments to update or create a WebsiteTick.
     * @example
     * // Update or create a WebsiteTick
     * const websiteTick = await prisma.websiteTick.upsert({
     *   create: {
     *     // ... data to create a WebsiteTick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteTick we want to update
     *   }
     * })
     */
    upsert<T extends websiteTickUpsertArgs>(args: SelectSubset<T, websiteTickUpsertArgs<ExtArgs>>): Prisma__websiteTickClient<$Result.GetResult<Prisma.$websiteTickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickCountArgs} args - Arguments to filter WebsiteTicks to count.
     * @example
     * // Count the number of WebsiteTicks
     * const count = await prisma.websiteTick.count({
     *   where: {
     *     // ... the filter for the WebsiteTicks we want to count
     *   }
     * })
    **/
    count<T extends websiteTickCountArgs>(
      args?: Subset<T, websiteTickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteTickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteTickAggregateArgs>(args: Subset<T, WebsiteTickAggregateArgs>): Prisma.PrismaPromise<GetWebsiteTickAggregateType<T>>

    /**
     * Group by WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {websiteTickGroupByArgs} args - Group by arguments.
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
      T extends websiteTickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: websiteTickGroupByArgs['orderBy'] }
        : { orderBy?: websiteTickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, websiteTickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteTickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the websiteTick model
   */
  readonly fields: websiteTickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for websiteTick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__websiteTickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the websiteTick model
   */
  interface websiteTickFieldRefs {
    readonly id: FieldRef<"websiteTick", 'String'>
    readonly response_time_ms: FieldRef<"websiteTick", 'Int'>
    readonly status: FieldRef<"websiteTick", 'WebsiteStatus'>
    readonly createdAt: FieldRef<"websiteTick", 'DateTime'>
    readonly region_id: FieldRef<"websiteTick", 'String'>
    readonly website_id: FieldRef<"websiteTick", 'String'>
  }
    

  // Custom InputTypes
  /**
   * websiteTick findUnique
   */
  export type websiteTickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter, which websiteTick to fetch.
     */
    where: websiteTickWhereUniqueInput
  }

  /**
   * websiteTick findUniqueOrThrow
   */
  export type websiteTickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter, which websiteTick to fetch.
     */
    where: websiteTickWhereUniqueInput
  }

  /**
   * websiteTick findFirst
   */
  export type websiteTickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter, which websiteTick to fetch.
     */
    where?: websiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websiteTicks to fetch.
     */
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for websiteTicks.
     */
    cursor?: websiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of websiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * websiteTick findFirstOrThrow
   */
  export type websiteTickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter, which websiteTick to fetch.
     */
    where?: websiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websiteTicks to fetch.
     */
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for websiteTicks.
     */
    cursor?: websiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of websiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * websiteTick findMany
   */
  export type websiteTickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter, which websiteTicks to fetch.
     */
    where?: websiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of websiteTicks to fetch.
     */
    orderBy?: websiteTickOrderByWithRelationInput | websiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing websiteTicks.
     */
    cursor?: websiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` websiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` websiteTicks.
     */
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * websiteTick create
   */
  export type websiteTickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * The data needed to create a websiteTick.
     */
    data: XOR<websiteTickCreateInput, websiteTickUncheckedCreateInput>
  }

  /**
   * websiteTick createMany
   */
  export type websiteTickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many websiteTicks.
     */
    data: websiteTickCreateManyInput | websiteTickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * websiteTick createManyAndReturn
   */
  export type websiteTickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * The data used to create many websiteTicks.
     */
    data: websiteTickCreateManyInput | websiteTickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * websiteTick update
   */
  export type websiteTickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * The data needed to update a websiteTick.
     */
    data: XOR<websiteTickUpdateInput, websiteTickUncheckedUpdateInput>
    /**
     * Choose, which websiteTick to update.
     */
    where: websiteTickWhereUniqueInput
  }

  /**
   * websiteTick updateMany
   */
  export type websiteTickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update websiteTicks.
     */
    data: XOR<websiteTickUpdateManyMutationInput, websiteTickUncheckedUpdateManyInput>
    /**
     * Filter which websiteTicks to update
     */
    where?: websiteTickWhereInput
    /**
     * Limit how many websiteTicks to update.
     */
    limit?: number
  }

  /**
   * websiteTick updateManyAndReturn
   */
  export type websiteTickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * The data used to update websiteTicks.
     */
    data: XOR<websiteTickUpdateManyMutationInput, websiteTickUncheckedUpdateManyInput>
    /**
     * Filter which websiteTicks to update
     */
    where?: websiteTickWhereInput
    /**
     * Limit how many websiteTicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * websiteTick upsert
   */
  export type websiteTickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * The filter to search for the websiteTick to update in case it exists.
     */
    where: websiteTickWhereUniqueInput
    /**
     * In case the websiteTick found by the `where` argument doesn't exist, create a new websiteTick with this data.
     */
    create: XOR<websiteTickCreateInput, websiteTickUncheckedCreateInput>
    /**
     * In case the websiteTick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<websiteTickUpdateInput, websiteTickUncheckedUpdateInput>
  }

  /**
   * websiteTick delete
   */
  export type websiteTickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
    /**
     * Filter which websiteTick to delete.
     */
    where: websiteTickWhereUniqueInput
  }

  /**
   * websiteTick deleteMany
   */
  export type websiteTickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which websiteTicks to delete
     */
    where?: websiteTickWhereInput
    /**
     * Limit how many websiteTicks to delete.
     */
    limit?: number
  }

  /**
   * websiteTick without action
   */
  export type websiteTickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the websiteTick
     */
    select?: websiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the websiteTick
     */
    omit?: websiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: websiteTickInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    url: 'url',
    timeAdded: 'timeAdded',
    userId: 'userId'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id',
    timeAdded: 'timeAdded'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const WebsiteTickScalarFieldEnum: {
    id: 'id',
    response_time_ms: 'response_time_ms',
    status: 'status',
    createdAt: 'createdAt',
    region_id: 'region_id',
    website_id: 'website_id'
  };

  export type WebsiteTickScalarFieldEnum = (typeof WebsiteTickScalarFieldEnum)[keyof typeof WebsiteTickScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    websites?: WebsiteListRelationFilter
    regions?: RegionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    websites?: WebsiteOrderByRelationAggregateInput
    regions?: RegionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    websites?: WebsiteListRelationFilter
    regions?: RegionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    timeAdded?: DateTimeFilter<"Website"> | Date | string
    userId?: StringNullableFilter<"Website"> | string | null
    ticks?: WebsiteTickListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    userId?: SortOrderInput | SortOrder
    ticks?: websiteTickOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    url?: StringFilter<"Website"> | string
    timeAdded?: DateTimeFilter<"Website"> | Date | string
    userId?: StringNullableFilter<"Website"> | string | null
    ticks?: WebsiteTickListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    url?: StringWithAggregatesFilter<"Website"> | string
    timeAdded?: DateTimeWithAggregatesFilter<"Website"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Website"> | string | null
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    user_id?: StringFilter<"Region"> | string
    timeAdded?: DateTimeFilter<"Region"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticks?: WebsiteTickListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    timeAdded?: SortOrder
    user?: UserOrderByWithRelationInput
    ticks?: websiteTickOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    user_id?: StringFilter<"Region"> | string
    timeAdded?: DateTimeFilter<"Region"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticks?: WebsiteTickListRelationFilter
  }, "id">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    timeAdded?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
    user_id?: StringWithAggregatesFilter<"Region"> | string
    timeAdded?: DateTimeWithAggregatesFilter<"Region"> | Date | string
  }

  export type websiteTickWhereInput = {
    AND?: websiteTickWhereInput | websiteTickWhereInput[]
    OR?: websiteTickWhereInput[]
    NOT?: websiteTickWhereInput | websiteTickWhereInput[]
    id?: StringFilter<"websiteTick"> | string
    response_time_ms?: IntFilter<"websiteTick"> | number
    status?: EnumWebsiteStatusFilter<"websiteTick"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"websiteTick"> | Date | string
    region_id?: StringFilter<"websiteTick"> | string
    website_id?: StringFilter<"websiteTick"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type websiteTickOrderByWithRelationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    region?: RegionOrderByWithRelationInput
    website?: WebsiteOrderByWithRelationInput
  }

  export type websiteTickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: websiteTickWhereInput | websiteTickWhereInput[]
    OR?: websiteTickWhereInput[]
    NOT?: websiteTickWhereInput | websiteTickWhereInput[]
    response_time_ms?: IntFilter<"websiteTick"> | number
    status?: EnumWebsiteStatusFilter<"websiteTick"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"websiteTick"> | Date | string
    region_id?: StringFilter<"websiteTick"> | string
    website_id?: StringFilter<"websiteTick"> | string
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type websiteTickOrderByWithAggregationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
    _count?: websiteTickCountOrderByAggregateInput
    _avg?: websiteTickAvgOrderByAggregateInput
    _max?: websiteTickMaxOrderByAggregateInput
    _min?: websiteTickMinOrderByAggregateInput
    _sum?: websiteTickSumOrderByAggregateInput
  }

  export type websiteTickScalarWhereWithAggregatesInput = {
    AND?: websiteTickScalarWhereWithAggregatesInput | websiteTickScalarWhereWithAggregatesInput[]
    OR?: websiteTickScalarWhereWithAggregatesInput[]
    NOT?: websiteTickScalarWhereWithAggregatesInput | websiteTickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"websiteTick"> | string
    response_time_ms?: IntWithAggregatesFilter<"websiteTick"> | number
    status?: EnumWebsiteStatusWithAggregatesFilter<"websiteTick"> | $Enums.WebsiteStatus
    createdAt?: DateTimeWithAggregatesFilter<"websiteTick"> | Date | string
    region_id?: StringWithAggregatesFilter<"websiteTick"> | string
    website_id?: StringWithAggregatesFilter<"websiteTick"> | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    websites?: WebsiteCreateNestedManyWithoutUserInput
    regions?: RegionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    regions?: RegionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: WebsiteUpdateManyWithoutUserNestedInput
    regions?: RegionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    regions?: RegionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type WebsiteCreateInput = {
    id?: string
    url: string
    timeAdded: Date | string
    ticks?: websiteTickCreateNestedManyWithoutWebsiteInput
    user?: UserCreateNestedOneWithoutWebsitesInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    url: string
    timeAdded: Date | string
    userId?: string | null
    ticks?: websiteTickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUpdateManyWithoutWebsiteNestedInput
    user?: UserUpdateOneWithoutWebsitesNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    ticks?: websiteTickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: string
    url: string
    timeAdded: Date | string
    userId?: string | null
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegionCreateInput = {
    id?: string
    name: string
    timeAdded?: Date | string
    user: UserCreateNestedOneWithoutRegionsInput
    ticks?: websiteTickCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    name: string
    user_id: string
    timeAdded?: Date | string
    ticks?: websiteTickUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegionsNestedInput
    ticks?: websiteTickUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    name: string
    user_id: string
    timeAdded?: Date | string
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type websiteTickCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region: RegionCreateNestedOneWithoutTicksInput
    website: WebsiteCreateNestedOneWithoutTicksInput
  }

  export type websiteTickUncheckedCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region_id: string
    website_id: string
  }

  export type websiteTickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutTicksNestedInput
    website?: WebsiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type websiteTickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type websiteTickCreateManyInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region_id: string
    website_id: string
  }

  export type websiteTickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type websiteTickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region_id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type WebsiteListRelationFilter = {
    every?: WebsiteWhereInput
    some?: WebsiteWhereInput
    none?: WebsiteWhereInput
  }

  export type RegionListRelationFilter = {
    every?: RegionWhereInput
    some?: RegionWhereInput
    none?: RegionWhereInput
  }

  export type WebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WebsiteTickListRelationFilter = {
    every?: websiteTickWhereInput
    some?: websiteTickWhereInput
    none?: websiteTickWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type websiteTickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    userId?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    timeAdded?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    timeAdded?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    timeAdded?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    timeAdded?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type websiteTickCountOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type websiteTickAvgOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type websiteTickMaxOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type websiteTickMinOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    region_id?: SortOrder
    website_id?: SortOrder
  }

  export type websiteTickSumOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type WebsiteCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type RegionCreateNestedManyWithoutUserInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput> | RegionCreateWithoutUserInput[] | RegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput | RegionCreateOrConnectWithoutUserInput[]
    createMany?: RegionCreateManyUserInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type WebsiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type RegionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput> | RegionCreateWithoutUserInput[] | RegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput | RegionCreateOrConnectWithoutUserInput[]
    createMany?: RegionCreateManyUserInputEnvelope
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type WebsiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type RegionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput> | RegionCreateWithoutUserInput[] | RegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput | RegionCreateOrConnectWithoutUserInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutUserInput | RegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegionCreateManyUserInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutUserInput | RegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutUserInput | RegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type WebsiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type RegionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput> | RegionCreateWithoutUserInput[] | RegionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RegionCreateOrConnectWithoutUserInput | RegionCreateOrConnectWithoutUserInput[]
    upsert?: RegionUpsertWithWhereUniqueWithoutUserInput | RegionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RegionCreateManyUserInputEnvelope
    set?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    disconnect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    delete?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    connect?: RegionWhereUniqueInput | RegionWhereUniqueInput[]
    update?: RegionUpdateWithWhereUniqueWithoutUserInput | RegionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RegionUpdateManyWithWhereWithoutUserInput | RegionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RegionScalarWhereInput | RegionScalarWhereInput[]
  }

  export type websiteTickCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput> | websiteTickCreateWithoutWebsiteInput[] | websiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutWebsiteInput | websiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: websiteTickCreateManyWebsiteInputEnvelope
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWebsitesInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    connect?: UserWhereUniqueInput
  }

  export type websiteTickUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput> | websiteTickCreateWithoutWebsiteInput[] | websiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutWebsiteInput | websiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: websiteTickCreateManyWebsiteInputEnvelope
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type websiteTickUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput> | websiteTickCreateWithoutWebsiteInput[] | websiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutWebsiteInput | websiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: websiteTickUpsertWithWhereUniqueWithoutWebsiteInput | websiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: websiteTickCreateManyWebsiteInputEnvelope
    set?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    disconnect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    delete?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    update?: websiteTickUpdateWithWhereUniqueWithoutWebsiteInput | websiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: websiteTickUpdateManyWithWhereWithoutWebsiteInput | websiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
  }

  export type UserUpdateOneWithoutWebsitesNestedInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    upsert?: UserUpsertWithoutWebsitesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebsitesInput, UserUpdateWithoutWebsitesInput>, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type websiteTickUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput> | websiteTickCreateWithoutWebsiteInput[] | websiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutWebsiteInput | websiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: websiteTickUpsertWithWhereUniqueWithoutWebsiteInput | websiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: websiteTickCreateManyWebsiteInputEnvelope
    set?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    disconnect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    delete?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    update?: websiteTickUpdateWithWhereUniqueWithoutWebsiteInput | websiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: websiteTickUpdateManyWithWhereWithoutWebsiteInput | websiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegionsInput = {
    create?: XOR<UserCreateWithoutRegionsInput, UserUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegionsInput
    connect?: UserWhereUniqueInput
  }

  export type websiteTickCreateNestedManyWithoutRegionInput = {
    create?: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput> | websiteTickCreateWithoutRegionInput[] | websiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutRegionInput | websiteTickCreateOrConnectWithoutRegionInput[]
    createMany?: websiteTickCreateManyRegionInputEnvelope
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
  }

  export type websiteTickUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput> | websiteTickCreateWithoutRegionInput[] | websiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutRegionInput | websiteTickCreateOrConnectWithoutRegionInput[]
    createMany?: websiteTickCreateManyRegionInputEnvelope
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRegionsNestedInput = {
    create?: XOR<UserCreateWithoutRegionsInput, UserUncheckedCreateWithoutRegionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegionsInput
    upsert?: UserUpsertWithoutRegionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegionsInput, UserUpdateWithoutRegionsInput>, UserUncheckedUpdateWithoutRegionsInput>
  }

  export type websiteTickUpdateManyWithoutRegionNestedInput = {
    create?: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput> | websiteTickCreateWithoutRegionInput[] | websiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutRegionInput | websiteTickCreateOrConnectWithoutRegionInput[]
    upsert?: websiteTickUpsertWithWhereUniqueWithoutRegionInput | websiteTickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: websiteTickCreateManyRegionInputEnvelope
    set?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    disconnect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    delete?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    update?: websiteTickUpdateWithWhereUniqueWithoutRegionInput | websiteTickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: websiteTickUpdateManyWithWhereWithoutRegionInput | websiteTickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
  }

  export type websiteTickUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput> | websiteTickCreateWithoutRegionInput[] | websiteTickUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: websiteTickCreateOrConnectWithoutRegionInput | websiteTickCreateOrConnectWithoutRegionInput[]
    upsert?: websiteTickUpsertWithWhereUniqueWithoutRegionInput | websiteTickUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: websiteTickCreateManyRegionInputEnvelope
    set?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    disconnect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    delete?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    connect?: websiteTickWhereUniqueInput | websiteTickWhereUniqueInput[]
    update?: websiteTickUpdateWithWhereUniqueWithoutRegionInput | websiteTickUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: websiteTickUpdateManyWithWhereWithoutRegionInput | websiteTickUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutTicksInput = {
    create?: XOR<RegionCreateWithoutTicksInput, RegionUncheckedCreateWithoutTicksInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTicksInput
    connect?: RegionWhereUniqueInput
  }

  export type WebsiteCreateNestedOneWithoutTicksInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type RegionUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<RegionCreateWithoutTicksInput, RegionUncheckedCreateWithoutTicksInput>
    connectOrCreate?: RegionCreateOrConnectWithoutTicksInput
    upsert?: RegionUpsertWithoutTicksInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutTicksInput, RegionUpdateWithoutTicksInput>, RegionUncheckedUpdateWithoutTicksInput>
  }

  export type WebsiteUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    upsert?: WebsiteUpsertWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutTicksInput, WebsiteUpdateWithoutTicksInput>, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type WebsiteCreateWithoutUserInput = {
    id?: string
    url: string
    timeAdded: Date | string
    ticks?: websiteTickCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    timeAdded: Date | string
    ticks?: websiteTickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteCreateManyUserInputEnvelope = {
    data: WebsiteCreateManyUserInput | WebsiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegionCreateWithoutUserInput = {
    id?: string
    name: string
    timeAdded?: Date | string
    ticks?: websiteTickCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    timeAdded?: Date | string
    ticks?: websiteTickUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionCreateOrConnectWithoutUserInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
  }

  export type RegionCreateManyUserInputEnvelope = {
    data: RegionCreateManyUserInput | RegionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteUpsertWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutUserInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutUserInput>
  }

  export type WebsiteScalarWhereInput = {
    AND?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    OR?: WebsiteScalarWhereInput[]
    NOT?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    timeAdded?: DateTimeFilter<"Website"> | Date | string
    userId?: StringNullableFilter<"Website"> | string | null
  }

  export type RegionUpsertWithWhereUniqueWithoutUserInput = {
    where: RegionWhereUniqueInput
    update: XOR<RegionUpdateWithoutUserInput, RegionUncheckedUpdateWithoutUserInput>
    create: XOR<RegionCreateWithoutUserInput, RegionUncheckedCreateWithoutUserInput>
  }

  export type RegionUpdateWithWhereUniqueWithoutUserInput = {
    where: RegionWhereUniqueInput
    data: XOR<RegionUpdateWithoutUserInput, RegionUncheckedUpdateWithoutUserInput>
  }

  export type RegionUpdateManyWithWhereWithoutUserInput = {
    where: RegionScalarWhereInput
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyWithoutUserInput>
  }

  export type RegionScalarWhereInput = {
    AND?: RegionScalarWhereInput | RegionScalarWhereInput[]
    OR?: RegionScalarWhereInput[]
    NOT?: RegionScalarWhereInput | RegionScalarWhereInput[]
    id?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    user_id?: StringFilter<"Region"> | string
    timeAdded?: DateTimeFilter<"Region"> | Date | string
  }

  export type websiteTickCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region: RegionCreateNestedOneWithoutTicksInput
  }

  export type websiteTickUncheckedCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region_id: string
  }

  export type websiteTickCreateOrConnectWithoutWebsiteInput = {
    where: websiteTickWhereUniqueInput
    create: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type websiteTickCreateManyWebsiteInputEnvelope = {
    data: websiteTickCreateManyWebsiteInput | websiteTickCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWebsitesInput = {
    id?: string
    username: string
    email: string
    password: string
    regions?: RegionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebsitesInput = {
    id?: string
    username: string
    email: string
    password: string
    regions?: RegionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebsitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
  }

  export type websiteTickUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: websiteTickWhereUniqueInput
    update: XOR<websiteTickUpdateWithoutWebsiteInput, websiteTickUncheckedUpdateWithoutWebsiteInput>
    create: XOR<websiteTickCreateWithoutWebsiteInput, websiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type websiteTickUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: websiteTickWhereUniqueInput
    data: XOR<websiteTickUpdateWithoutWebsiteInput, websiteTickUncheckedUpdateWithoutWebsiteInput>
  }

  export type websiteTickUpdateManyWithWhereWithoutWebsiteInput = {
    where: websiteTickScalarWhereInput
    data: XOR<websiteTickUpdateManyMutationInput, websiteTickUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type websiteTickScalarWhereInput = {
    AND?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
    OR?: websiteTickScalarWhereInput[]
    NOT?: websiteTickScalarWhereInput | websiteTickScalarWhereInput[]
    id?: StringFilter<"websiteTick"> | string
    response_time_ms?: IntFilter<"websiteTick"> | number
    status?: EnumWebsiteStatusFilter<"websiteTick"> | $Enums.WebsiteStatus
    createdAt?: DateTimeFilter<"websiteTick"> | Date | string
    region_id?: StringFilter<"websiteTick"> | string
    website_id?: StringFilter<"websiteTick"> | string
  }

  export type UserUpsertWithoutWebsitesInput = {
    update: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebsitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type UserUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    regions?: RegionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    regions?: RegionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRegionsInput = {
    id?: string
    username: string
    email: string
    password: string
    websites?: WebsiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegionsInput = {
    id?: string
    username: string
    email: string
    password: string
    websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegionsInput, UserUncheckedCreateWithoutRegionsInput>
  }

  export type websiteTickCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    website: WebsiteCreateNestedOneWithoutTicksInput
  }

  export type websiteTickUncheckedCreateWithoutRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    website_id: string
  }

  export type websiteTickCreateOrConnectWithoutRegionInput = {
    where: websiteTickWhereUniqueInput
    create: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput>
  }

  export type websiteTickCreateManyRegionInputEnvelope = {
    data: websiteTickCreateManyRegionInput | websiteTickCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRegionsInput = {
    update: XOR<UserUpdateWithoutRegionsInput, UserUncheckedUpdateWithoutRegionsInput>
    create: XOR<UserCreateWithoutRegionsInput, UserUncheckedCreateWithoutRegionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegionsInput, UserUncheckedUpdateWithoutRegionsInput>
  }

  export type UserUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: WebsiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type websiteTickUpsertWithWhereUniqueWithoutRegionInput = {
    where: websiteTickWhereUniqueInput
    update: XOR<websiteTickUpdateWithoutRegionInput, websiteTickUncheckedUpdateWithoutRegionInput>
    create: XOR<websiteTickCreateWithoutRegionInput, websiteTickUncheckedCreateWithoutRegionInput>
  }

  export type websiteTickUpdateWithWhereUniqueWithoutRegionInput = {
    where: websiteTickWhereUniqueInput
    data: XOR<websiteTickUpdateWithoutRegionInput, websiteTickUncheckedUpdateWithoutRegionInput>
  }

  export type websiteTickUpdateManyWithWhereWithoutRegionInput = {
    where: websiteTickScalarWhereInput
    data: XOR<websiteTickUpdateManyMutationInput, websiteTickUncheckedUpdateManyWithoutRegionInput>
  }

  export type RegionCreateWithoutTicksInput = {
    id?: string
    name: string
    timeAdded?: Date | string
    user: UserCreateNestedOneWithoutRegionsInput
  }

  export type RegionUncheckedCreateWithoutTicksInput = {
    id?: string
    name: string
    user_id: string
    timeAdded?: Date | string
  }

  export type RegionCreateOrConnectWithoutTicksInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutTicksInput, RegionUncheckedCreateWithoutTicksInput>
  }

  export type WebsiteCreateWithoutTicksInput = {
    id?: string
    url: string
    timeAdded: Date | string
    user?: UserCreateNestedOneWithoutWebsitesInput
  }

  export type WebsiteUncheckedCreateWithoutTicksInput = {
    id?: string
    url: string
    timeAdded: Date | string
    userId?: string | null
  }

  export type WebsiteCreateOrConnectWithoutTicksInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
  }

  export type RegionUpsertWithoutTicksInput = {
    update: XOR<RegionUpdateWithoutTicksInput, RegionUncheckedUpdateWithoutTicksInput>
    create: XOR<RegionCreateWithoutTicksInput, RegionUncheckedCreateWithoutTicksInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutTicksInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutTicksInput, RegionUncheckedUpdateWithoutTicksInput>
  }

  export type RegionUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRegionsNestedInput
  }

  export type RegionUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUpsertWithoutTicksInput = {
    update: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutTicksInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type WebsiteUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutWebsitesNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WebsiteCreateManyUserInput = {
    id?: string
    url: string
    timeAdded: Date | string
  }

  export type RegionCreateManyUserInput = {
    id?: string
    name: string
    timeAdded?: Date | string
  }

  export type WebsiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: websiteTickUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timeAdded?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type websiteTickCreateManyWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    region_id: string
  }

  export type websiteTickUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneRequiredWithoutTicksNestedInput
  }

  export type websiteTickUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region_id?: StringFieldUpdateOperationsInput | string
  }

  export type websiteTickUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region_id?: StringFieldUpdateOperationsInput | string
  }

  export type websiteTickCreateManyRegionInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    createdAt?: Date | string
    website_id: string
  }

  export type websiteTickUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type websiteTickUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website_id?: StringFieldUpdateOperationsInput | string
  }

  export type websiteTickUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website_id?: StringFieldUpdateOperationsInput | string
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