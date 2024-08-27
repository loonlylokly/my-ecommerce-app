'use client';

import { initializeCart } from '@/shared/lib/store/slices/cartSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const CartInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      dispatch(initializeCart(JSON.parse(savedCart).items));
    } else {
      dispatch(initializeCart([]));
    }
  }, [dispatch]);

  return null;
};

export default CartInitializer;