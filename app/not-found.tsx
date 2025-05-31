import React from 'react';

export default function NotFound() {
  return (
    <div className="dark:bg-card-dark flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center">
      <h1 className="text-primary text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl font-semibold text-black dark:text-white">Page Not Found</p>
      <p className="text-gray dark:text-gray mt-4 max-w-md">
        The page you are looking for does not exist or has been moved to a different location.
      </p>
    </div>
  );
}
