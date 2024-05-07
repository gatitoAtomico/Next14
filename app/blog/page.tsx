"use client";

import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <>
      <Link href={"/"}>Home</Link>
      <h1>My Blog</h1>
    </>
  );
}
