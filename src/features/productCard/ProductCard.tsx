'use client';

import { cn } from '@/shared/lib/helpers/cn';
import { Product } from '@/shared/lib/types';
import { Button } from '@/shared/ui/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  isShort?: boolean;
}

export const ProductCard = ({ product, isShort = true }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('add to basket');
  };

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>
          {isShort ? `${product.description.slice(0, 100)}...` : product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={product.image}
          alt={product.title}
          height={480}
          width={480}
          className={cn('w-48 h-48 object-cover mb-4')}
        />
      </CardContent>
      <CardFooter className={cn('flex justify-between flex-wrap')}>
        <Text variant='h4' className='mb-2'>
          {`${product.currency} ${product.price}`}
        </Text>
        <div className='flex items-center mb-2'>
          <span className='text-yellow-500 mr-1'>★</span>
          <span>{product.rating}</span>
        </div>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};
