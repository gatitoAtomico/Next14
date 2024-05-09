import React, { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export default function Theme({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
