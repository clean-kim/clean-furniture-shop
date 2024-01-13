import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MainProductList } from '@components/main';

// async function fetchData(category: string) {
// const response = await fetch(`https://my-json-server.typicode.com/clean-kim/json-server/products?category=${category}`);
// const response = await fetch(process.env.URL + '/products');
// return response.json();
// }

export default function Category() {
  const { categoryCode } = useParams();

  // const datas = await fetchData(params.category);

  useEffect(() => {}, [categoryCode]);

  return (
    <section className='shop'>
      <section>
        <h2 className='section_title'>{categoryCode?.toUpperCase()}</h2>
        <MainProductList category={categoryCode} />
      </section>
    </section>
  );
}