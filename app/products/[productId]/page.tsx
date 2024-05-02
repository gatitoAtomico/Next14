import { Metadata } from "next";

type Props = {
  params: {
    productId: String;
  };
};

//generateMetadata can also be an sync function
export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};
export default function ProductDetails({ params }: Props) {
  const { productId } = params;

  return <h1>Details about product {productId}</h1>;
}
