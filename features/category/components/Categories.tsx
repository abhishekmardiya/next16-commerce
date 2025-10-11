import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import Link from 'next/link';
import Boundary from '@/components/internal/Boundary';
import ShowMore from '@/components/ui/ShowMore';
import { getCategories } from '../category-queries';

export default async function Categories() {
  'use cache';

  cacheTag('categories');

  const categories = await getCategories();

  return (
    <Boundary rendering="hybrid" cached>
      <ShowMore className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5" initial={5}>
        {categories.map(category => {
          return (
            <Boundary key={category} hydration="server">
              <Link
                href={{
                  pathname: '/all',
                  query: { category },
                }}
                className="hover:text-accent dark:hover:text-accent block text-sm text-gray-700 transition-colors dark:text-gray-300"
              >
                {category}
              </Link>
            </Boundary>
          );
        })}
      </ShowMore>
    </Boundary>
  );
}
