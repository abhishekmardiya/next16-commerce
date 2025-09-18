'use cache: remote';

import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import { cacheTag } from 'next/dist/server/use-cache/cache-tag';
import Product from '@/features/product/components/Product';

export default async function ProductModal({ params }: PageProps<'/product/[id]'>) {
  const { id } = await params;
  const productId = Number(id);

  cacheLife('max');
  cacheTag('product-' + productId);

  return <Product imageClassName="h-60" productId={productId} />;
}
