import React, { Suspense } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { getIsAuthenticated } from '@/features/auth/auth-queries';
import { AuthProvider } from '@/features/auth/components/AuthProvider';
import { ProductListSkeleton } from '@/features/product/components/ProductList';
import UserProfile, { UserProfileSkeleton } from '@/features/user/components/UserProfile';

export default async function AuthLayout({ children, modal }: LayoutProps<'/'>) {
  const loggedIn = getIsAuthenticated();

  return (
    <AuthProvider loggedIn={loggedIn}>
      <AppLayout headerContent={<Suspense fallback={<UserProfileSkeleton />}>{<UserProfile />}</Suspense>}>
        <Suspense
          fallback={
            <>
              <div className="skeleton-animation mb-4 h-30 w-full rounded-lg" />
              <div className="skeleton-animation mb-4 h-10 w-full rounded-lg" />
              <div className="flex h-full grow flex-col gap-4">
                <div className="skeleton-animation h-6 w-24 rounded" />
                <ProductListSkeleton />
              </div>
            </>
          }
        >
          {children}
          {modal}
        </Suspense>
      </AppLayout>
    </AuthProvider>
  );
}
