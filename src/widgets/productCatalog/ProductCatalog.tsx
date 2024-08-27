'use client';

import { ProductCard } from '@/features/productCard/ProductCard';
import { ProductFilter } from '@/features/productFilter/ProductFilter';
import { ROUTES } from '@/shared/lib/constants/common';
import { products } from '@/shared/lib/mocks/products';
import { Text } from '@/shared/ui/Text';
import Link from 'next/link';

export const ProductCatalog = () => {
  return (
    <section>
      <div className="mb-6">
        <ProductFilter />
      </div>
      <Text variant="h1">Our Products</Text>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products?.map((product: any) => (
          <Link key={product.id} href={`${ROUTES.catalog}/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

