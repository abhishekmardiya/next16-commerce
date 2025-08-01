import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';

export default function NotFound() {
  return (
    <AppLayout
      headerContent={
        <Link
          href="/"
          className="text-primary hover:text-primary-dark inline-flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft aria-hidden className="size-4" />
          Back Home
        </Link>
      }
    >
      <div className="flex flex-col items-center justify-center rounded-lg text-center">
        <h1 className="text-primary text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl font-semibold">Page Not Found</p>
        <p className="text-gray dark:text-gray mt-4 max-w-md">
          The page you are looking for does not exist or has been moved to a different location.
        </p>
      </div>
    </AppLayout>
  );
}
