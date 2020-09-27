import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom";
import { ReactQueryConfig, ReactQueryConfigProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
import di from "./domain/di";
import { DIContext } from "./hooks/useDI";

const queryConfig: ReactQueryConfig = {
  shared: {
    suspense: true,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactQueryConfigProvider config={queryConfig}>
        <BrowserRouter>
          <DIContext.Provider value={di}>
            <App />
          </DIContext.Provider>
        </BrowserRouter>
      </ReactQueryConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
