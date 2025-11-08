import { queryOptions } from "@tanstack/react-query";

import type { AsyncFunction, CreateQueryOptionsResult } from "./types";

export function createQueryOptions<QueryFnResult, QueryFnError = Error, QueryFnParams = void>(
  queryKey: string[],
  asyncFn: AsyncFunction<QueryFnResult, QueryFnParams>
): CreateQueryOptionsResult<QueryFnResult, QueryFnError, QueryFnParams> {
  const createQueryKey = (params?: QueryFnParams) => (params ? [...queryKey, params] : queryKey);

  function wrappedQueryOptions(params?: QueryFnParams) {
    const queryFn = () => asyncFn(params!);

    return queryOptions<QueryFnResult, QueryFnError>({
      queryKey: createQueryKey(params),
      queryFn,
    });
  }

  return wrappedQueryOptions as CreateQueryOptionsResult<QueryFnResult, QueryFnError, QueryFnParams>;
}
