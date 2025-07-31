/* eslint-disable jsx-a11y/anchor-is-valid */
import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import Link from 'next/link';
import React from 'react';
import { getCategories } from '@/modules/product/product-queries';
import ShowMore from './ui/ShowMore';

export default async function Footer() {
  'use cache';
  cacheLife('days');

  const categories = await getCategories();

  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-10">
        <ShowMore initial={5}>
          {categories.map(cat => {
            return (
              <Link
                key={cat}
                href={`/?category=${encodeURIComponent(cat)}`}
                className="text-gray dark:text-gray hover:text-primary block text-sm transition-colors"
              >
                {cat}
              </Link>
            );
          })}
        </ShowMore>
        <div className="border-divider dark:border-divider-dark my-6 border-b" />
        <div className="text-gray dark:text-gray text-center text-sm">
          <p>© 2024 Commerce. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
