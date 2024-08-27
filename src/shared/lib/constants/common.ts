export const ROUTES = {
  main: '/',
  catalog: '/products',
  cart: '/cart'
};

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ROUTES = {
  products: `${API_URL}/products`
};

export const SORT_OPTIONS = [
  { value: 'price', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating: High to Low' }
];

export const LIMIT_DEFAULT = '10';
export const PAGE_DEFAULT = '1';
