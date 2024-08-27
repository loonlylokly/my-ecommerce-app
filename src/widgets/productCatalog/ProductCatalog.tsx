'use client';

import { ProductFilter } from '@/features/productFilter/ProductFilter';
import { ProductList } from '@/features/productList/ProductList';
import { useAppSelector } from '@/shared/lib/hooks/useAppSelector';
import { useGetProductsQuery } from '@/shared/lib/store/product/product.api';
import { Loader } from '@/shared/ui/Loader';
import { Text } from '@/shared/ui/Text';

export const ProductCatalog = () => {
  const {search, sort} = useAppSelector((state) => state.filter);
  const {data: products, isLoading, error} = useGetProductsQuery({search, sort});

  if (isLoading) {
    return <Loader size="large" />;
  }

  if (error) {
    return <div className='text-red'>{JSON.stringify(error)}</div>
  }

  return (
    <section>
      <div className="mb-6">
        <ProductFilter />
      </div>
      <Text variant="h1">Our Products</Text>
      <ProductList filter={{search, sort}} initialProducts={[...(products || [])]}/>
    </section>
  );
};

