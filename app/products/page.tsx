"use client";

import styled from "styled-components";

const Product = styled.h2`
  color: red;
`;

export default function ProductList() {
  return (
    <>
      <h1>Product list</h1>
      <Product>Product 1</Product>
      <Product>Product 2</Product>
      <Product>Product 3</Product>
    </>
  );
}
