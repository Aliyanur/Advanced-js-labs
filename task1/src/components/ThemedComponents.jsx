import React from "react";
import withTheme from "../hocs/withTheme";

// 🔘 BUTTON
function ButtonComponent({ theme, children }) {
  return (
    <button
      style={{
        padding: theme.spacing.sm,
        backgroundColor: theme.colors.primary,
        color: "#fff",
        border: "none",
        borderRadius: theme.borderRadius.md,
      }}
    >
      {children}
    </button>
  );
}
export const ThemedButton = withTheme(ButtonComponent);

// 🧾 CARD
function CardComponent({ theme, children }) {
  return (
    <div
      style={{
        padding: theme.spacing.md,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius.lg,
      }}
    >
      {children}
    </div>
  );
}
export const ThemedCard = withTheme(CardComponent);

// 📝 TEXT
function TextComponent({ theme, children }) {
  return (
    <h2 style={{ color: theme.colors.text }}>
      {children}
    </h2>
  );
}
export const ThemedText = withTheme(TextComponent);

// 🔥 INPUT (THIS IS YOUR PROBLEM PART — FIXED)
function InputComponent({ theme, label, ...props }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <label style={{ color: theme.colors.text }}>{label}</label>

      <input
        style={{
          width: "100%", // ✅ IMPORTANT FIX
          padding: theme.spacing.sm,
          border: `1px solid ${theme.colors.border}`,
          borderRadius: theme.borderRadius.md,
        }}
        {...props}
      />
    </div>
  );
}
export const ThemedInput = withTheme(InputComponent);

// 🌙 SWITCHER
function SwitcherComponent({ toggleTheme }) {
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
}
export const ThemeSwitcher = withTheme(SwitcherComponent);