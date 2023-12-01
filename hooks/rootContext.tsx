"use client";

import { createContext, useContext } from "react";

const RootContext = createContext<boolean>(false);

export const RootContextProvider = ({
  root,
  children,
}: {
  root: boolean;
  children: React.ReactNode;
}) => {
  return <RootContext.Provider value={root}>{children}</RootContext.Provider>;
};

export const useRootContext = () => {
  return useContext(RootContext);
};
