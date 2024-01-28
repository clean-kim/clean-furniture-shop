import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ProductList } from '@components/common';
import { Product } from '@typings/Model';
import { useIsMobile } from '../utils/useIsMobile';

export default function CategoryPage() {
  const { categoryCode } = useParams();
  const productList = useLoaderData() as Product[];
  const isMobile = useIsMobile();

  useEffect(() => {}, []);

  return (
    <section className='shop'>
      <section>
        <h2 className={`section_title mt40${isMobile ? ' ml10' : ''}`}>{categoryCode?.toUpperCase()}</h2>
        <ProductList list={productList ?? []} />
      </section>
    </section>
  );
}