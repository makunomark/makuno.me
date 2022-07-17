import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../utils/colors";

export const ThemeChangerContext = React.createContext({
  switchTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(darkTheme);

  useEffect(() => {
    setActiveTheme(lightTheme);
    setUpThemeListener();
  }, []);

  function setUpThemeListener() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    darkThemeMq.addEventListener("change", (e) => {
      if (e.matches) {
        setActiveTheme(darkTheme);
      } else {
        setActiveTheme(lightTheme);
      }
    });
  }

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
      <ThemeProvider theme={activeTheme} switchTheme={switchTheme}>
        {children}
      </ThemeProvider>
    </ThemeChangerContext.Provider>
  );
}
