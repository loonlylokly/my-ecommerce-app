export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  currency: string;
  image: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Filter {
  limit?: string;
  page?: string;
  search: string;
  sort: string;
}