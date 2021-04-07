import React from "react";

import { ProjectListProvider } from "./src/context/ProjectListContext";

export const wrapRootElement = ({ element }) => (
  <ProjectListProvider>{element}</ProjectListProvider>
);
