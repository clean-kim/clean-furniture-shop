import { useEffect } from 'react';
import { useLoaderData, useSearchParams } from 'react-router-dom';
import { ProductList } from '@components/common';
import { Product } from '@typings/Model';

export default function SearchResultPage() {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') ?? '';
  const productList = useLoaderData() as Product[];
  console.log(keyword, productList);

  useEffect(() => {}, [productList, keyword]);

  return (
    <section className='search container'>
      <h2 className='result_title'><q>&#39;{keyword}&#39;</q>에 대한 검색 결과입니다.</h2>
      <div className='result_subtitle'>
        총 {productList.length}개 상품
      </div>
      <div className='mt30'>
        <ProductList list={productList} />
      </div>
    </section>
  );
} 