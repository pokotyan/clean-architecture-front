import { injectable, inject } from "tsyringe";
import { denormalize } from "normalizr";
import { BlogResponse, blogSchema } from "../../api/blog/get/schema";
import type { Factory } from "../../model/blog/factory";
import type { Repository } from "..";
import type { RootState } from "../../../store";

@injectable()
export default class BlogRepository implements Repository {
  constructor(@inject("BlogFactory") private factory: Factory) {}

  findAll<T>(store: RootState["blog"]): Promise<T[]> {
    const denormalizedBlogs = denormalize(
      store.result.blogs,
      [blogSchema],
      store.entities
    );

    return Promise.all(
      denormalizedBlogs.map((blog: BlogResponse) => this.factory.create(blog))
    );
  }

  findOne<T>(id: number, store: RootState["blog"]): Promise<T> {
    const denormalizedBlog: BlogResponse = denormalize(
      id,
      blogSchema,
      store.entities
    );

    return this.factory.create(denormalizedBlog);
  }
}
