import React, { FC } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BlogDetail from "../oraganisms/BlogDetail";
import { useQueryWithSuspense } from "../../hooks/useQueryWithSuspense";
import BlogUseCase from "../../domain/usecase/blog";
import { NormalizedBlogs } from "../../domain/api/blog/get/schema";
import { selectBlog } from "../../features/blog/action";
import { useDIContext } from "../../hooks/useDI";

const fetchBlogModel = (usecase: BlogUseCase) => {
  return async ({ id, data }: { id: number; data: NormalizedBlogs }) => {
    return usecase.findOne(id, data);
  };
};

const BlogDetailContainer: FC = () => {
  const { blogId } = useParams();
  const di = useDIContext();
  const blogState = useSelector(selectBlog);
  const isExistsBlogState = !!Object.keys(blogState.entities.blogs).length;

  const { data: blog, isFetched } = useQueryWithSuspense(
    [{ id: blogId, data: blogState }, "getBlogModel"],
    fetchBlogModel(di.usecase.blog),
    { enabled: isExistsBlogState }
  );

  return <>{isFetched && <BlogDetail blog={blog} />}</>;
};

export default BlogDetailContainer;
