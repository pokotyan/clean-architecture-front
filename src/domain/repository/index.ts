export interface Repository {
  findAll<T>(store: any): Promise<T[]>;
  findOne<T>(id: number, store: any): Promise<T>;
}
