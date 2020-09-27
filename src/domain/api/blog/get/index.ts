import { normalize } from "normalizr";
import dayjs from "dayjs";
import {
  NormalizedBlogs,
  blogSchema,
  NormalizedBlog,
  Entities,
} from "./schema";
import { store } from "../../../../store";
import blogAction from "../../../../features/blog/action";

const blogsData = [
  {
    id: 123,
    user: {
      id: 1,
      name: "Tom",
    },
    title: "引越し",
    body: "引越ししました",
    createdAt: dayjs(),
    comments: [
      {
        id: 324,
        body: "どこに？",
        createdAt: dayjs().add(3, "hour"),
        user: {
          id: 2,
          name: "Bob",
        },
      },
      {
        id: 325,
        body: "今度、家いかせて",
        createdAt: dayjs().add(5, "hour"),
        user: {
          id: 3,
          name: "Sam",
        },
      },
    ],
  },
];

export const getBlogs = (): Promise<NormalizedBlogs> => {
  const normalizedBlogs = normalize<
    NormalizedBlog,
    Entities,
    { blogs: number[] }
  >({ blogs: blogsData }, { blogs: [blogSchema] });
  store.dispatch(blogAction.set(normalizedBlogs));

  return Promise.resolve(normalizedBlogs);
};
