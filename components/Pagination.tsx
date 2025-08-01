import Link from 'next/link';
import LinkStatus from './ui/LinkStatus';

export default function Pagination({
  currentPage,
  totalPages,
  searchQuery,
  sort,
}: {
  currentPage: number;
  totalPages: number;
  searchQuery?: string;
  sort?: 'asc' | 'desc';
}) {
  const createPageUrl = (page: number) => {
    return {
      pathname: '/',
      query: {
        ...(searchQuery && { q: searchQuery }),
        ...(sort && { sort }),
        ...(page > 1 && { page: page.toString() }),
      },
    };
  };
  return (
    <div className="flex items-center gap-2">
      {currentPage > 1 && (
        <Link
          href={createPageUrl(currentPage - 1)}
          className="text-primary hover:text-primary-dark inline-flex items-center px-3 py-2 text-sm font-medium"
        >
          <LinkStatus>Previous</LinkStatus>
        </Link>
      )}
      <div className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => {
          return i + 1;
        }).map(page => {
          return (
            <Link key={page} href={createPageUrl(page)}>
              <LinkStatus
                className={`inline-flex items-center px-3 py-2 text-sm font-medium ${
                  page === currentPage ? 'bg-primary text-white' : 'text-primary hover:text-primary-dark'
                }`}
                variant="background"
              >
                {page}
              </LinkStatus>
            </Link>
          );
        })}
      </div>
      {currentPage < totalPages && (
        <Link
          href={createPageUrl(currentPage + 1)}
          className="text-primary hover:text-primary-dark inline-flex items-center px-3 py-2 text-sm font-medium"
        >
          <LinkStatus>Next</LinkStatus>
        </Link>
      )}
    </div>
  );
}
