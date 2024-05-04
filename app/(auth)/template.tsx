"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import { useState } from "react";

const navLinks = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

type ActiveLinkProps = {
  active: string;
};

const ActiveLink = styled.div<ActiveLinkProps>`
  background-color: ${(props) => (props.active === "true" ? "blue" : "")};
  width: 60px;
`;

const Input = styled.input`
  border: 1px solid black;
  border-radius: 2px;
  height: 20px;
  width: 200px;
`;

//then using templates instead of layout state will be renitialized instead layout dont rerender so they will keep current state between components
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  let [input, setInput] = useState("");

  return (
    <>
      <Input onChange={(e) => setInput(e.target.value)} />
      <div>
        {navLinks.map((nav) => (
          <ActiveLink
            key={nav.name}
            active={pathName === nav.href ? "true" : "false"}
          >
            <Link href={nav.href}>{nav.name}</Link>
          </ActiveLink>
        ))}
      </div>
      {children}
    </>
  );
}
