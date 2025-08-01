/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';
import React from 'react';
import { getCategories } from '@/modules/product/product-queries';
import ShowMore from './ui/ShowMore';

export default async function Footer() {
  const categories = await getCategories();

  return (
    <footer className="bg-white dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-10">
        <ShowMore initial={5}>
          {categories.map(category => {
            return (
              <Link
                key={category}
                href="#"
                className="text-gray dark:text-gray hover:text-primary block text-sm transition-colors"
              >
                {category}
              </Link>
            );
          })}
        </ShowMore>
        <div className="border-divider dark:border-divider-dark my-6 border-b" />
        <div className="text-gray dark:text-gray text-center text-sm">
          <p>© 2024 Commerce. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4">
            <Link href="/about" className="hover:text-primary transition-colors">
              About
            </Link>
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
