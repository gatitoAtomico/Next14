import Link from "next/link";

export const metadata = {
  title: "About Codevolution",
};

export default function About() {
  return (
    <>
      <Link href={"/counter"}>Counter</Link>
      <h1>About page</h1>
    </>
  );
}
