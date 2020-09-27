import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NormalizedBlogs } from "../../domain/api/blog/get/schema";

const initialState: NormalizedBlogs = {
  entities: {
    users: {},
    comments: {},
    blogs: {},
  },
  result: {
    blogs: [],
  },
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<NormalizedBlogs>): NormalizedBlogs => {
      return { ...state, ...action.payload };
    },
  },
});

export default blogSlice.reducer;
