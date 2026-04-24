import React from "react";
import ThemeContext from "../context/ThemeContext";

export function withTheme(WrappedComponent) {
  function WithTheme(props) {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          if (!context) {
            throw new Error("Must be used inside ThemeProvider");
          }

          const { theme, isDark, toggleTheme } = context;

          return (
            <WrappedComponent
              {...props}
              theme={theme}
              isDark={isDark}
              toggleTheme={toggleTheme}
            />
          );
        }}
      </ThemeContext.Consumer>
    );
  }

  return WithTheme; // ✅ IMPORTANT
}

export default withTheme;