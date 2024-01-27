import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainProductList } from '@components/main';
import { useIsMobile } from '../utils/useIsMobile';

export default function CategoryPage() {
  const { categoryCode } = useParams();
  useEffect(() => {}, [categoryCode]);
  const isMobile = useIsMobile();

  return (
    <section className='shop'>
      <section>
        <h2 className={`section_title mt40${isMobile ? ' ml10' : ''}`}>{categoryCode?.toUpperCase()}</h2>
        <MainProductList category={categoryCode ?? ''} />
      </section>
    </section>
  );
}