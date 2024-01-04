import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MainProductList } from '@components/main';

// async function fetchData(category: string) {
// const response = await fetch(`https://my-json-server.typicode.com/clean-kim/json-server/products?category=${category}`);
// const response = await fetch(process.env.URL + '/products');
// return response.json();
// }

export default function Category() {
  const [ params ] = useSearchParams();
  const category = params.get('category') ?? '';

  // const datas = await fetchData(params.category);

  useEffect(() => {}, [category]);

  return (
    <section className='shop'>
      <section>
        <h2 className='section_title'>{category.toUpperCase()}</h2>
        <MainProductList category={category} />
      </section>
    </section>
  );
}