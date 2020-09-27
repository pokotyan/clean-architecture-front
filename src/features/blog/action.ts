import { NormalizedBlogs } from "../../domain/api/blog/get/schema";
import { RootState } from "../../store";
import { blogSlice } from "./reducer";

const { actions } = blogSlice;

export const selectBlog = (state: RootState): NormalizedBlogs => state.blog;

export const isEmpty = (state: RootState): boolean =>
  !!Object.keys(state.blog.entities.blogs).length;

export default actions;
