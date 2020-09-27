import { injectable, inject } from "tsyringe";
import type { Repository } from "../../repository";
import { Blog } from "../../model/blog/blog";
import { RootState } from "../../../store";

@injectable()
export default class BlogUseCase {
  constructor(@inject("BlogRepository") private repository: Repository) {}

  findAll(store: RootState["blog"]) {
    return this.repository.findAll<Blog>(store);
  }

  findOne(blogId: number, store: RootState["blog"]) {
    return this.repository.findOne<Blog>(blogId, store);
  }
}
