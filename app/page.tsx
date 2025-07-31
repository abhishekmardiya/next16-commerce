import { ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Banner from '@/components/Banner';
import Search from '@/components/Search';
import LinkStatus from '@/components/ui/LinkStatus';
import ProductList, { ProductListSkeleton } from '@/modules/product/components/ProductList';

type Props = {
  searchParams: Promise<{
    q: string;
    sort?: 'asc' | 'desc';
  }>;
};

export default async function RootPage({ searchParams }: Props) {
  const { q, sort } = await searchParams;

  return (
    <>
      <Banner />
      <Search />
      <div className="flex flex-col gap-4">
        <SortButton sort={sort} />
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList searchQuery={q} sort={sort} />
        </Suspense>
      </div>
    </>
  );
}

function SortButton({ sort }: { sort?: 'asc' | 'desc' }) {
  const nextSort = sort === 'asc' ? 'desc' : 'asc';
  return (
    <Link
      href={{ pathname: '/', query: { q: '', sort: nextSort } }}
      className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
    >
      <div className="flex items-center gap-2">
        {nextSort === 'asc' ? <ArrowUp className="mr-1" /> : <ArrowDown className="mr-1" />}
        Sort {nextSort.charAt(0).toUpperCase() + nextSort.slice(1)}
        <LinkStatus />
      </div>
    </Link>
  );
}
