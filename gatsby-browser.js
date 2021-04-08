import { ThemeProvider } from "@emotion/react";
import React from "react";

import { ProjectListProvider } from "./src/context/ProjectListContext";
import { darkTheme, lightTheme } from "./src/utils/colors";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={darkTheme}>
    <ProjectListProvider>{element}</ProjectListProvider>
  </ThemeProvider>
);
