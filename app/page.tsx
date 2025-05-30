import React, { Suspense } from 'react';
import ProductList, { ProductListSkeleton } from '@/components/ProductList';
import Search from '@/components/Search';

type Props = {
  searchParams: Promise<{
    q: string;
  }>;
};

export default async function RootPage({ searchParams }: Props) {
  const { q } = await searchParams;

  return (
    <>
      <Search />
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList searchQuery={q} />
      </Suspense>
    </>
  );
}
