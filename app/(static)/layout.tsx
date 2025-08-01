import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LinkStatus from '@/components/ui/LinkStatus';

export default async function StaticLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        rightContent={
          <Link
            href="/"
            className="text-primary hover:text-primary-dark inline-flex items-center gap-2 text-sm font-medium"
          >
            <LinkStatus>
              <ArrowLeft className="size-4" />
              Back Home
            </LinkStatus>
          </Link>
        }
      />
      <main className="flex flex-1 flex-col gap-10 p-4 pb-8 sm:p-10 sm:pb-8 lg:pb-20 2xl:px-60">{children}</main>
      <Footer />
    </>
  );
}
