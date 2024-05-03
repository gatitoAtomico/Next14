"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: "5px";
`;

const Row = styled.div`
  padding: 5px;
`;

export default function Page() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    let result = async () => {
      try {
        let data = await axios.get("api/jokes", {
          params: {
            category: "sport",
          },
        });
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    result();
  }, []);

  return (
    <Container>
      <Row>{JSON.stringify(data)}</Row>
      <Row>
        <Link href={"/blog"}>Blog</Link>
      </Row>
      <Row>
        <Link href={"/products"}>Products</Link>
      </Row>
    </Container>
  );
}
