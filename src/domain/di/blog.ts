import { container } from "tsyringe";
import BlogUseCase from "../usecase/blog";
import { BlogFactory } from "../model/blog/factory";
import BlogRepository from "../repository/blog";
import type { Repository } from "../repository";

export const NewBlogUseCase = () => {
  container.register("BlogFactory", { useClass: BlogFactory });
  container.register<Repository>("BlogRepository", {
    useClass: BlogRepository,
  });

  return container.resolve(BlogUseCase);
};
