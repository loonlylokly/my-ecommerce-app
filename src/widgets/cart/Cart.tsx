'use client'

import { ROUTES } from "@/shared/lib/constants/common";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { clearCart, removeFromCart, updateQuantity } from "@/shared/lib/store/slices/cartSlice";
import { CartItem } from "@/shared/lib/types";
import { Button } from "@/shared/ui/Button";
import { Text } from "@/shared/ui/Text";
import Link from "next/link";

export function Cart() {
  const dispatch = useAppDispatch();

  const { items: cartItems, isInitialized } = useAppSelector((state) => state.cart);


  const handleRemoveItem = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const totalPrice = cartItems.reduce((total: number, item: CartItem) => total + parseFloat(item.price) * item.quantity, 0);
  const totalCount = cartItems.reduce((total: number, item: CartItem) => total + 1, 0)
  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Text variant="h1" className="mb-6">Your Cart</Text>
      {cartItems.length === 0 ? (
        <Text variant="p">Your cart is empty.</Text>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <Link href={`${ROUTES.catalog}/${item.id}`} className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <Text variant="h3">{item.title}</Text>
                  <Text variant="p">{`${item.currency} ${item.price}`}</Text>
                </div>
              </Link>
              <div className="flex items-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => handleUpdateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 p-2 border rounded mr-4"
                />
                <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
              </div>
            </div>
          ))}
          <div className="mt-6 flex justify-between items-center">
            <Text variant="h2">Total: {`$${totalPrice.toFixed(2)}`}</Text>
            <Text variant="h2">Total Count: {`${totalCount}`}</Text>
            <Button onClick={handleClearCart}>Clear Cart</Button>
          </div>
        </>
      )}
    </div>
  )
}
