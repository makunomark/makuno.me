import { ThemeProvider } from "@emotion/react";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "../utils/colors";

export default function ThemeContextProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(darkTheme);
  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
}
