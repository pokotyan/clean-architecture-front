import { injectable } from "tsyringe";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Blog } from "./blog";
import type { BlogResponse } from "../../api/blog/get/schema";

export interface Factory {
  create<T>(data: any): Promise<T>;
}

@injectable()
export class BlogFactory {
  async create(denormalizedBlog: BlogResponse): Promise<Blog> {
    const model = plainToClass(Blog, denormalizedBlog);
    console.log(model);

    const errors = await validate(model);

    if (errors.length) {
      throw new Error(`モデルの作成に失敗しました。\n${errors}`);
    }

    return model;
  }
}
