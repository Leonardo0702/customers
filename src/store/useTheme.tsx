import React, { createContext, useContext, useState } from "react";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeType } from "../global/types/theme";
import default_theme from "../global/default_theme";
import alternative_theme from "../global/alternative_theme";
import { useStorageTheme } from "../hooks/useStorageTheme";

type ThemeContextType = {
  currentTheme: ThemeType;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme === "default";
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDefaultTheme, setIsDefaultTheme] = useState(getInitialTheme);

  const isCurrentTheme = isDefaultTheme ? default_theme : alternative_theme;

  const toggleTheme = () => {
    setIsDefaultTheme((prev) => {
      const newTheme = !prev;
      useStorageTheme.setBaseTheme(newTheme ? "default" : "light");
      return newTheme;
    });
  };

  return (
    <StyledThemeProvider theme={isCurrentTheme}>
      <ThemeContext.Provider
        value={{ currentTheme: isCurrentTheme, toggleTheme }}
      >
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
