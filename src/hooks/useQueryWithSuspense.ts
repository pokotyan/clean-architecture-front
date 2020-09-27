// https://qiita.com/Yuichi_Yogo/items/2b27c8dc7d0213775cd5
import {
  useQuery,
  QueryFunction,
  QueryKey,
  QueryResult,
  QueryConfig,
} from "react-query";

type RequireData<T extends { data: unknown }> = T & {
  data: NonNullable<T["data"]>;
};

type UseQueryWithSuspenseResult<T> = RequireData<QueryResult<T, unknown>>;

export const useQueryWithSuspense = <T extends unknown>(
  queryKey: QueryKey,
  fetcher: QueryFunction<T>,
  queryConfig?: QueryConfig<T>
): UseQueryWithSuspenseResult<T> => {
  return useQuery(queryKey, fetcher, queryConfig) as any;
};
