'use client';

import React, { useState } from 'react';
import { useAuth } from '@/modules/auth/components/AuthProvider';

export default function Banner() {
  const { isAuthenticated } = useAuth();
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) {
    return null;
  }

  return (
    <div className="dark:bg-card-dark bg-card border-divider dark:border-divider-dark rounded-lg border p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-primary mb-2 text-lg font-semibold">
            {isAuthenticated ? 'Your Exclusive Discounts' : 'Join Us for Amazing Discounts'}
          </h3>
          <p className="text-gray dark:text-gray text-sm">
            {isAuthenticated
              ? 'Check out your personalized offers and exclusive member discounts.'
              : 'Sign up today and unlock exclusive discounts on your favorite products!'}
          </p>
        </div>
        <div className="ml-4 flex flex-col gap-2">
          <button
            onClick={() => {
              return setIsDismissed(true);
            }}
            className="text-primary hover:text-primary-dark text-sm transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
