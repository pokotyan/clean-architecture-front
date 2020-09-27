import React, { FC } from "react";
import { getBlogs } from "../../domain/api/blog/get";
import { useQueryWithSuspense } from "../../hooks/useQueryWithSuspense";
import BlogList from "../oraganisms/BlogList";
import BlogUseCase from "../../domain/usecase/blog";
import { NormalizedBlogs } from "../../domain/api/blog/get/schema";
import { useDIContext } from "../../hooks/useDI";

const fetchBlogModels = (usecase: BlogUseCase) => {
  return async (data: NormalizedBlogs) => {
    return usecase.findAll(data);
  };
};

const BlogListContainer: FC = () => {
  const { data: blogsData } = useQueryWithSuspense("getBlogs", getBlogs);
  const di = useDIContext();
  const { data: blogs } = useQueryWithSuspense(
    [blogsData, "getBlogModels"],
    fetchBlogModels(di.usecase.blog)
  );

  return <BlogList blogs={blogs} />;
};

export default BlogListContainer;
