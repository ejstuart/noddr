import { Theme } from "@emotion/react";

const theme: Theme = {
  colors: {
    background: "#ffffff",
    foreground: "#171717",
    backgroundDark: "#0a0a0a",
    foregroundDark: "#ededed",
  },
  fonts: {
    sans: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    4: "1rem",
    5: "1.25rem",
    8: "2rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    32: "8rem",
  },
  borderRadius: {
    none: "0",
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    full: "9999px",
  },
};

export default theme;
