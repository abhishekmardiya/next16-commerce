import React, { Suspense } from 'react';
import AppLayout from '@/components/layout/AppLayout';
import { getIsAuthenticated } from '@/modules/auth/auth-queries';
import { AuthProvider } from '@/modules/auth/components/AuthProvider';
import UserProfile, { UserProfileSkeleton } from '@/modules/user/UserProfile';

export default async function AuthLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  const isAuthenticated = getIsAuthenticated();

  return (
    <AuthProvider isAuthenticated={isAuthenticated}>
      <AppLayout headerContent={<Suspense fallback={<UserProfileSkeleton />}>{<UserProfile />}</Suspense>}>
        {children}
        {modal}
      </AppLayout>
    </AuthProvider>
  );
}
