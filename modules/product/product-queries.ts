import 'server-only';

import { notFound } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import type { Review } from '@prisma/client';

export async function getProduct(productId: number) {
  await slow();

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    notFound();
  }
  return product;
}

export async function getProductDetails(productId: number) {
  await slow();

  const productDetails = await prisma.productDetail.findUnique({
    where: { productId },
  });

  if (!productDetails) {
    notFound();
  }
  return productDetails;
}

export async function getProducts(searchQuery?: string, sort?: 'asc' | 'desc') {
  await slow();

  return prisma.product.findMany({
    orderBy: {
      name: sort === 'asc' ? 'asc' : 'desc',
    },
    where: {
      name: {
        contains: searchQuery,
        mode: 'insensitive', // Remove with sqlite
      },
    },
  });
}

export async function getReviews(productId: number): Promise<Review[]> {
  await slow();

  return prisma.review.findMany({
    orderBy: { createdAt: 'desc' },
    where: { productId },
  });
}

export async function getCategories() {
  await slow();

  const categories = await prisma.product.findMany({
    distinct: ['category'],
    orderBy: {
      category: 'asc',
    },
    select: {
      category: true,
    },
    take: 20,
    where: {
      category: {
        not: null,
      },
    },
  });

  return categories
    .map(item => {
      return item.category;
    })
    .filter(Boolean) as string[];
}
