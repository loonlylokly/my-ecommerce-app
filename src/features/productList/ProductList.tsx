'use client';

import { ProductCard } from '@/features/productCard/ProductCard';
import { fetchProducts } from '@/shared/api/products';
import { ROUTES } from '@/shared/lib/constants/common';
import { useIntersectionObserver } from '@/shared/lib/hooks/useIntersectionObserver';
import { Filter, Product } from '@/shared/lib/types';
import { Loader } from '@/shared/ui/Loader';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

type CatalogProps = {
  filter: Filter;
  initialProducts: Product[];
};

export const ProductList = ({ filter, initialProducts }: CatalogProps) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>();
  const { ref: loaderRefIO, inView } = useIntersectionObserver<HTMLDivElement>({
    root: loaderRef,
    threshold: 1
  });

  async function loadMoreMovies() {
    const next = page + 1;
    const products = await fetchProducts({ filter: { ...filter, page: next.toString() } });
    if (products?.length) {
      setPage(next);
      setProducts((prev: Product[] | undefined) => [...(prev?.length ? prev : []), ...products]);
    } else {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (inView) {
      loadMoreMovies();
    }
  }, [inView]);

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts]);

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {products?.map((product: any) => (
          <Link key={product.id} href={`${ROUTES.catalog}/${product.id}`}>
            <ProductCard key={product.id} product={product} />
          </Link>
        ))}
      </div>
      {isLoading && (
        <div className='mt-6' ref={loaderRefIO}>
          <Loader size='large' />
        </div>
      )}
    </>
  );
};
