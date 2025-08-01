import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import AppLayout from '@/components/layout/AppLayout';
import LinkStatus from '@/components/ui/LinkStatus';

export default async function StaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout
      headerContent={
        <Link
          href="/"
          className="text-primary hover:text-primary-dark inline-flex items-center gap-2 text-sm font-medium"
        >
          <LinkStatus>
            <ArrowLeft aria-hidden className="size-4" />
          </LinkStatus>
        </Link>
      }
    >
      {children}
    </AppLayout>
  );
}
