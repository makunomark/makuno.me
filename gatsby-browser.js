import React from "react";

import { ProjectListProvider } from "./src/context/ProjectListContext";
import ThemeContextProvider from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeContextProvider>
    <ProjectListProvider>{element}</ProjectListProvider>
  </ThemeContextProvider>
);
