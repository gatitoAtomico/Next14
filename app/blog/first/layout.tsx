"use client";

import styled from "styled-components";

const Container = styled.div`
  color: red;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
