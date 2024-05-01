"use client";

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  color: red;
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

  return <Container>{JSON.stringify(data)}</Container>;
}
