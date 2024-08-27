import { Cart } from '@/widgets/cart/Cart';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cart',
  description: 'Your Cart',
}

export default function CartPage() {

  return (
    <Cart />
  );
};
