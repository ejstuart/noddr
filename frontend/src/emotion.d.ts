import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      background: string;
      foreground: string;
      backgroundDark: string;
      foregroundDark: string;
    };
    fonts: {
      sans: string;
      mono: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spacing: {
      0: string;
      1: string;
      2: string;
      4: string;
      5: string;
      8: string;
      16: string;
      20: string;
      24: string;
      32: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
  }
}
