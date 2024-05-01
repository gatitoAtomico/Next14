export default function ProductDetails({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const { productId, reviewId } = params;

  return (
    <h1>
      Review about product {productId} with review id {reviewId}
    </h1>
  );
}
