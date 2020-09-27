export type ListEntities<
  K extends string | number | symbol,
  T,
  U extends string
> = {
  [k in U]: Record<K, T>;
};
