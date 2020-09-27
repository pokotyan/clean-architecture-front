import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import logger from "redux-logger";
import blogReducer from "./features/blog/reducer";

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
