'use client';

import { useRouter } from 'next/navigation';
import React, { use, useTransition } from 'react';
import Boundary from '@/components/internal/Boundary';
import { useAuth } from '@/features/auth/components/AuthProvider';
import { logOut } from '../auth-actions';

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();
  const { loggedIn } = useAuth();
  const isLoggedIn = use(loggedIn);
  const router = useRouter();

  return (
    <Boundary hydration="client">
      <button
        aria-disabled={isPending}
        className="text-primary hover:text-primary-dark aria-disabled:text-gray cursor-pointer text-sm transition-colors aria-disabled:cursor-not-allowed aria-disabled:italic"
        onClick={() => {
          if (isLoggedIn) {
            startTransition(async () => {
              await logOut();
            });
          } else {
            router.push('/sign-in');
          }
        }}
      >
        {isLoggedIn ? 'Sign out' : 'Sign in'} {isPending && '...'}
      </button>
    </Boundary>
  );
}
