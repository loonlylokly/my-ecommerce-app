import { products } from '@/shared/lib/mocks/products';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');
  const limit = parseInt(searchParams.get('limit') || '');
  let page = parseInt(searchParams.get('page') || '');

  let filteredProducts = [...products];

  if (search) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (sort) {
    filteredProducts.sort((a, b) => {
      switch (sort) {
        case 'price':
          return parseFloat(a.price) - parseFloat(b.price);
        case 'price-desc':
          return parseFloat(b.price) - parseFloat(a.price);
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  if (limit) {

    // БЕСКОНЕЧНЫЙ СКРОЛЛ
    // const maxPage = 10;
    // page = page % maxPage;
    // if (page === 0) page+=1;

    
    filteredProducts = filteredProducts.slice(page*limit-limit, page*limit);
  }

  return NextResponse.json(filteredProducts);
}