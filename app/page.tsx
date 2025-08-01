import { ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Search from '@/components/Search';
import { DiscountBanner } from '@/components/banner/Banner';
import LinkStatus from '@/components/ui/LinkStatus';
import ProductList, { ProductListSkeleton } from '@/modules/product/components/ProductList';

type Props = {
  searchParams: Promise<{
    page?: string;
    q: string;
    sort?: 'asc' | 'desc';
  }>;
};

export default async function RootPage({ searchParams }: Props) {
  const { q, sort, page } = await searchParams;
  const currentPage = page ? parseInt(page, 10) : 1;

  return (
    <>
      <DiscountBanner />
      <Search />
      <div className="flex h-full grow flex-col gap-4">
        <SortButton sort={sort} page={currentPage} />
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList searchQuery={q} sort={sort} page={currentPage} />
        </Suspense>
      </div>
    </>
  );
}

function SortButton({ sort, page }: { sort?: 'asc' | 'desc'; page?: number }) {
  const nextSort = sort === 'asc' ? 'desc' : 'asc';
  return (
    <Link
      href={{ pathname: '/', query: { q: '', sort: nextSort, ...(page && page > 1 && { page: page.toString() }) } }}
      className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
    >
      <LinkStatus>
        <div className="flex items-center gap-2">
          {nextSort === 'asc' ? <ArrowUp className="mr-1" /> : <ArrowDown className="mr-1" />}
          Sort {nextSort.charAt(0).toUpperCase() + nextSort.slice(1)}
        </div>
      </LinkStatus>
    </Link>
  );
}
