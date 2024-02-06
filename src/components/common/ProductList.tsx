import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductItem } from '@components/common/ProductItem';
import { Product } from '@typings/Model';
import { getComma } from '@utils';

export interface ProductListProps {
  list: Product[];
}

export function ProductList({ list }: ProductListProps) {
  const { categoryCode } = useParams();
  useEffect(() => {}, [categoryCode, list]);

  return (
    <ul className="product_list">
      {
        list.length > 0 ?
          list.map((item) => {
            return <li key={`product_${item.no}`}>
              <ProductItem
                no={item.no}
                title={item.title}
                brandName={item.brandName}
                discountRate={item.discountRate}
                price={item.price}
                category={item.category}
                priceText={getComma(item.price)}
              />
            </li>;
          })
          :
          <li>no data</li>
      }
    </ul>
  );
}