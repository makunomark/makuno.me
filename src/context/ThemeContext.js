import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../utils/colors";

export const ThemeChangerContext = React.createContext({
  switchTheme: () => {},
});

export default function ThemeContextProvider({ children }) {
  const [activeTheme, setActiveTheme] = useState(darkTheme);

  useEffect(() => {
    switchTheme();
  }, [children]);

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
      <ThemeProvider
        theme={activeTheme == darkTheme ? darkTheme : lightTheme}
        switchTheme={switchTheme}
      >
        {children}
      </ThemeProvider>
    </ThemeChangerContext.Provider>
  );
}
