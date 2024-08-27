import { ProductCatalog } from "@/widgets/productCatalog/ProductCatalog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'E-commerce catalog',
  description: 'The Best E-commerce catalog',
}

export default function Home() {
  return (
    <ProductCatalog />
  );
}