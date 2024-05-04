"use client";

import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: "5px";
`;

const Row = styled.div`
  padding: 5px;
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
          category: "sportad",
        },
      }),
  });

  const jokeMessage = res?.data?.message;

  if (isLoading) return "Loading...";

  if (error) return "An error has occurreds: " + error.response.data.message;

  return (
    <Container>
      <Row>{jokeMessage}</Row>
      <Row>
        <Link href={"/blog"}>Blog</Link>
      </Row>
      <Row>
        <Link href={"/products"}>Products</Link>
      </Row>
    </Container>
  );
}
