"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: "15px";
`;

const Row = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.background};
`;

export default function Page() {
  const {
    isLoading,
    error,
    data: res,
  } = useQuery({
    queryKey: ["randomJoke"],
    queryFn: () =>
      axios.get("api/jokes", {
        params: {
          category: "sport",
        },
      }),
    staleTime: 1000,
  });

  useEffect(() => {
    console.log("Hello from feature 1");
  }, []);

  const jokeMessage = res?.data?.message;

  if (isLoading) return "Loading...";

  if (error)
    return "An error has occurre in the page: " + error.response.data.message;

  return (
    <Container>
      <Row>{jokeMessage}</Row>
      <Row>
        <Link href={"/blog"}>Blog1</Link>
      </Row>
      <Row>
        <Link href={"/products"}>Products1</Link>
      </Row>
    </Container>
  );
}
