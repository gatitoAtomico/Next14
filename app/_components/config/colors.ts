export type DefaultTheme = {
  primary: string;
  secondary: string;
  accent: string;
  textPrimary: string;
  textSecondary: string;
  white: string;
  background: string;
  black: string;
  error: string;
  banner: string;
  youtube: string;
  facebook: string;
  telegram: string;
};

type Theme = {
  light: DefaultTheme;
  dark: DefaultTheme;
  [key: string]: DefaultTheme;
};

export const colors: Theme = {
  light: {
    primary: "#3b3adb",
    secondary: "#8786F3",
    accent: "#3F3CFB",
    textPrimary: "#070711",
    textSecondary: "#a0a0a0",
    white: "#F9FDFD",
    background: "#F9FDFD",
    black: "#000000",
    error: "#ff6347",
    banner: "#f1f1f1",
    youtube: "#ff0000",
    facebook: "#4267B2",
    telegram: "#2AABEE",
  },
  dark: {
    primary: "#3b3adb",
    secondary: "#8786F3",
    accent: "#3F3CFB",
    textPrimary: "#070711",
    textSecondary: "#a0a0a0",
    white: "#F9FDFD",
    background: "#F9FDFD",
    black: "#000000",
    error: "#ff6347",
    banner: "#f1f1f1",
    youtube: "#ff0000",
    facebook: "#4267B2",
    telegram: "#2AABEE",
  },
};
