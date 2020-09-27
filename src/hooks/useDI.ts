import React, { useContext } from "react";
import di from "../domain/di";

export const DIContext = React.createContext(di);

export const useDIContext = () => {
  return useContext(DIContext);
};
