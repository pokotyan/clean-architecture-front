import { schema, NormalizedSchema } from "normalizr";
import { ListEntities } from "../../schema";

// apiレスポンス
export type BlogResponse = {
  id: number;
  user: {
    id: number;
    name: string;
  };
  title: string;
  comments: {
    id: number;
    body: string;
    user: {
      id: number;
      name: string;
    };
  }[];
};
export type BlogsResponse = BlogResponse[];

// normalizrで使うスキーマ
export const userSchema = new schema.Entity<NormalizedUser>("users");
export const commentSchema = new schema.Entity<Comment>("comments", {
  user: userSchema,
});
export const blogSchema = new schema.Entity<NormalizedBlog>("blogs", {
  user: userSchema,
  comments: [commentSchema],
});

// normalizeされた後の型定義
export type NormalizedBlogs = NormalizedSchema<Entities, { blogs: number[] }>;

export type Entities = BlogEntities & UserEntities & CommentEntities;

export interface NormalizedBlog {
  id: number;
  user: number;
  title: string;
  comments: number[];
}
export type BlogsStore = Record<number, NormalizedBlog>;
export type BlogEntities = ListEntities<number, NormalizedBlog, "blogs">;

export interface NormalizedComment {
  id: number;
  body: string;
  user: number;
}
export type CommentsStore = Record<number, NormalizedComment>;
export type CommentEntities = ListEntities<
  number,
  NormalizedComment,
  "comments"
>;

export interface NormalizedUser {
  id: number;
  name: string;
}
export type UsersStore = Record<number, NormalizedUser>;
export type UserEntities = ListEntities<number, NormalizedUser, "users">;
