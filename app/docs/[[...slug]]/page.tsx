import { notFound } from "next/navigation";
export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  let { slug } = params;

  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]} and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing features for {slug[0]}</h1>;
  } else if (slug.length > 2) {
    notFound();
  }

  return <h1>Docs Homepage</h1>;
}
