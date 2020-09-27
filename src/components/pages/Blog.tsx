import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import CircularProgress from "@material-ui/core/CircularProgress";
import BlogList from "../containers/BlogList";
import BlogDetail from "../containers/BlogDetail";
import ErrorBoundary from "../../ErrorBoundary";

function BlogPage() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route
          path=""
          element={
            <Suspense fallback={<CircularProgress />}>
              <BlogList />
            </Suspense>
          }
        ></Route>
        <Route
          path=":blogId"
          element={
            <Suspense fallback={<CircularProgress />}>
              <BlogDetail />
            </Suspense>
          }
        />
      </Routes>
    </ErrorBoundary>
  );
}

export default BlogPage;
