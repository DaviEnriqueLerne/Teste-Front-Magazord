import { queryOptions } from "@tanstack/react-query";

export type AsyncFunction<TResult, TParams> = TParams extends void ? () => Promise<TResult> : (params: TParams) => Promise<TResult>;

export type WrappedQueryOptions<QueryFnResult, QueryFnError> = ReturnType<typeof queryOptions<QueryFnResult, QueryFnError>>;

export type CreateQueryOptionsResult<QueryFnResult, QueryFnError, QueryFnParams> = QueryFnParams extends void
  ? () => WrappedQueryOptions<QueryFnResult, QueryFnError>
  : (params: QueryFnParams) => WrappedQueryOptions<QueryFnResult, QueryFnError>;
