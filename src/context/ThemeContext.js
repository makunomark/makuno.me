import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../utils/colors";

export const ThemeChangerContext = React.createContext({
  switchTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(lightTheme);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    const lightThemeMq = window.matchMedia("(prefers-color-scheme: light)");
    if (darkThemeMq.matches) {
      setActiveTheme(darkTheme);
    }
    if (lightThemeMq.matches) {
      setActiveTheme(lightTheme);
    }
  }, []);

  function switchTheme() {
    if (activeTheme == darkTheme) {
      setActiveTheme(lightTheme);
    } else {
      setActiveTheme(darkTheme);
    }
  }

  return (
    <ThemeChangerContext.Provider
      value={{
        activeTheme: activeTheme == darkTheme ? "dark" : "light",
        switchTheme: () => switchTheme(),
      }}
    >
      <ThemeProvider theme={darkTheme} switchTheme={switchTheme}>
        {children}
      </ThemeProvider>
    </ThemeChangerContext.Provider>
  );
}
