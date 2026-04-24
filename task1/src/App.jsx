import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  ThemedButton,
  ThemedCard,
  ThemedText,
  ThemedInput,
  ThemeSwitcher,
} from "./components/ThemedComponents";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "30px" }}>
        <ThemeSwitcher />

        <br /><br />

        <ThemedCard>
          <ThemedText>
            Lab 13 - HOC Theme System
          </ThemedText>

          <br /><br />

          <ThemedInput
            label="Your Name"
            placeholder="Enter name"
          />

          <br /><br />

          <ThemedButton>
            Submit
          </ThemedButton>
        </ThemedCard>
      </div>
    </ThemeProvider>
  );
}

export default App;