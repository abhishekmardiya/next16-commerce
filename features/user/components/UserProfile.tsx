'use client';

import { User } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import Boundary from '@/components/internal/Boundary';
import { getCurrentAccountAction } from '@/features/auth/auth-actions';
import LoginButton from '@/features/auth/components/LoginButton';

export default function UserProfile() {
  const [account, setAccount] = useState<{ name: string; id: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accountData = await getCurrentAccountAction();
        setAccount(accountData);
      } catch {
        setAccount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, []);

  if (loading) {
    return <UserProfileSkeleton />;
  }

  return (
    <Boundary hydration="client" rendering="static">
      <div className="flex items-center gap-2">
        <div className="flex flex-col items-end gap-1">
          {account && <span className="text-sm">{account.name}</span>}
          <Suspense>
            <LoginButton />
          </Suspense>
        </div>
        {account ? (
          <Link href="/user" prefetch>
            <span className="sr-only">Go to Profile</span>
            <User
              aria-hidden
              className="text-primary hover:text-primary-dark size-8 cursor-pointer rounded-full p-1 transition-all hover:bg-gray-100 dark:hover:bg-gray-800"
            />
          </Link>
        ) : (
          <User aria-hidden className="text-gray size-8 rounded-full p-1" />
        )}
      </div>
    </Boundary>
  );
}

export function UserProfileSkeleton() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
