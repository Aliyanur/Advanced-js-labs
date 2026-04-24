import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined);

export const lightTheme = {
  name: "light",
  colors: {
    primary: "#0066cc",
    secondary: "#6c757d",
    background: "#ffffff",
    surface: "#f8f9fa",
    text: "#212529",
    textSecondary: "#6c757d",
    border: "#dee2e6",
    error: "#dc3545",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
  },
  typography: {
    fontSize: {
      sm: "14px",
      md: "16px",
      xxl: "32px",
    },
  },
  borderRadius: {
    md: "8px",
    lg: "12px",
  },
};

export const darkTheme = {
  ...lightTheme,
  name: "dark",
  colors: {
    ...lightTheme.colors,
    background: "#1a1a2e",
    surface: "#16213e",
    text: "#ffffff",
    border: "#495057",
  },
};

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;