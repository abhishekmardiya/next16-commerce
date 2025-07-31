import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Suspense } from 'react';
import Footer from '@/components/Footer';
import { getIsAuthenticated } from '@/modules/auth/auth-queries';
import { AuthProvider } from '@/modules/auth/components/AuthProvider';
import UserProfile, { UserProfileSkeleton } from '@/modules/auth/components/UserProfile';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js App Router Commerce',
  title: 'Next.js App Router Commerce',
};

export default async function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  const isAuthenticated = await getIsAuthenticated();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider isAuthenticated={isAuthenticated}>
          <div className="flex min-h-screen flex-col">
            <header className="border-divider dark:border-divider-dark flex min-h-20 items-center justify-between border-b bg-white px-4 py-4 sm:px-10 2xl:px-60 dark:bg-black">
              <h1 className="text-3xl font-bold">
                <Link href="/" className="text-primary hover:text-primary-dark">
                  Commerce
                </Link>
              </h1>
              <Suspense fallback={<UserProfileSkeleton />}>
                <UserProfile />
              </Suspense>
            </header>
            <main className="flex flex-1 flex-col gap-10 p-4 pb-8 sm:p-10 sm:pb-8 lg:pb-20 2xl:px-60">{children}</main>
            <Footer />
          </div>
          {modal}
        </AuthProvider>
      </body>
    </html>
  );
}
