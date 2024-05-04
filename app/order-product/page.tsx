"use client";

import styled from "styled-components";
import { useRouter } from "next/navigation";

const OrderBtn = styled.button`
  background-color: red;
  height: "20px";
`;

export default function OrderProduct() {
  let router = useRouter();

  let addOrder = () => {
    router.push("/");
  };

  return (
    <>
      <div>Product</div>
      <OrderBtn onClick={() => addOrder()}>Add</OrderBtn>
    </>
  );
}
