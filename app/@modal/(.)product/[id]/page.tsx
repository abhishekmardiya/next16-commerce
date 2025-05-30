import React, { Suspense } from 'react';
import Product, { ProductSkeleton } from '@/components/Product';
import Modal from '@/components/ui/Modal';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductModal({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);

  return (
    <Modal goBackOnClose openModal={true} title="Quick Preview">
      <Suspense fallback={<ProductSkeleton />}>
        <Product productId={productId} />
      </Suspense>
      <div className="mt-6 flex justify-center">
        <a
          className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
          href={`/product/${productId}`}
        >
          {'View product details ->'}
        </a>
      </div>
    </Modal>
  );
}
