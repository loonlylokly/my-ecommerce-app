import { ProductCard } from '@/features/productCard/ProductCard';
import { getAllProducts, getProduct } from '@/shared/api/products';

export async function generateStaticParams() {
  const products = await getAllProducts();
  const productsSlugs = products.map((product: { id: number }) => ({
    slug: String(product.id)
  }));
  return productsSlugs;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  return {
    title: product?.title,
    description: product?.description
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  if (!product) return <h1>Not found</h1>;

  return (
    <div>
      <ProductCard product={product} isShort={false} />
    </div>
  );
}
