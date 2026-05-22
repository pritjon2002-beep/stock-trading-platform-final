import React, { createContext } from "react";

export const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>
      {children}
    </GeneralContext.Provider>
  );
};