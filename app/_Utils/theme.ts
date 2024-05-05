export type Palette = {
  primaryColor: string;
  secondaryColor: string;
};

type Theme = {
  gatito: Palette;
  main: Palette;
  [key: string]: Palette;
};

export const appTheme: Theme = {
  gatito: { primaryColor: "red", secondaryColor: "yellow" },
  main: { primaryColor: "blue", secondaryColor: "green" },
};
