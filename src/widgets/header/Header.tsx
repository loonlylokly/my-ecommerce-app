import { ROUTES } from '@/shared/lib/constants/common';
import { cn } from '@/shared/lib/helpers/cn';
import { Button } from '@/shared/ui/Button';
import Link from 'next/link';

export function Header() {
  return (
    <header className={cn('flex w-full p-4 justify-around')}>
      <Button asChild>
        <Link href={ROUTES.main}>Home</Link>
      </Button>
      <Button asChild>
        <Link href={ROUTES.catalog}>Catalog</Link>
      </Button>
      <Button asChild>
        <Link href={ROUTES.cart}>Cart</Link>
      </Button>
    </header>
  );
}
