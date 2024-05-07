"use client";

import { useSelector } from "react-redux";
import styled from "styled-components";

const MainContainer = styled.div`
  flex: 1;
  height: "100%";
  background-color: ${(props) => props.theme.primaryColor};
`;

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme);

  return <MainContainer theme={theme}>{children}</MainContainer>;
};

export default ThemeProvider;
