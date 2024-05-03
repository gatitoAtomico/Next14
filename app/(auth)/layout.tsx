"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

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

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <>
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
