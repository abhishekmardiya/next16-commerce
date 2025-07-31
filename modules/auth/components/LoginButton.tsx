'use client';

import React, { useTransition } from 'react';
import { useAuth } from '@/modules/auth/components/AuthProvider';
import { logOut, logIn } from '../auth-actions';

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();
  const { isAuthenticated } = useAuth();

  return (
    <button
      aria-disabled={isPending}
      className="text-primary hover:text-primary-dark aria-disabled:text-gray cursor-pointer text-sm transition-colors aria-disabled:cursor-not-allowed aria-disabled:italic"
      onClick={() => {
        startTransition(async () => {
          if (isAuthenticated) {
            await logOut();
          } else {
            await logIn('jane.smith@work.com');
          }
        });
      }}
    >
      {isPending ? (isAuthenticated ? 'Logging out...' : 'Logging in...') : isAuthenticated ? 'Log out' : 'Log in'}
    </button>
  );
}
