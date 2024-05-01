export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = params;

  return <h1>Details about product {productId}</h1>;
}
