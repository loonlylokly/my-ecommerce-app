export const ROUTES = {
  main: '/',
  catalog: '/products',
  cart: '/cart'
};

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const API_ROUTES = {
  products: `${API_URL}/products`
};

