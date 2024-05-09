"use client";

import ModalHook from "../../../../_components/ModalHook";
import styled from "styled-components";
import { useState } from "react";
import ReviewList from "./review";

const Paragraph = styled.div`
  height: 20px;
  padding: 20px;
  background-color: purple;
  width: 30%;
`;

const ReviewItem = styled.button`
  height: 20px;
  width: 200px;
  margin: 10px;
`;

export default function ReviewDetails({ params }) {
  const { productId, reviewId } = params;
  const reviews = ["Great product!", "Excellent service", "Highly recommended"];

  return (
    <ModalHook componentToShow={<ReviewList reviews={reviews} />}>
      {({ openmodal }) => (
        <ReviewItem onClick={() => openmodal()}> Open Modal </ReviewItem>
      )}
    </ModalHook>
  );
}
