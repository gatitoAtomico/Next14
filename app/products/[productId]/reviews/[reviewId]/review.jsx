"use client";

import styled from "styled-components";

const ReviewContainer = styled.div`
  height: 300px;
  width: 300px;
  background-color: black;
  color: white;
`;

const Product = styled.h2`
  color: red;
`;

export default function ReviewList({ reviews }) {
  console.log("modaldata", reviews);
  return (
    <ReviewContainer>
      <Product>Review 1</Product>
      <Product>Review 2</Product>
      <Product>Review 3</Product>
    </ReviewContainer>
  );
}
