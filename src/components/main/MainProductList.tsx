import { useEffect, useState } from 'react';
import { ProductItem } from '@components/common/ProductItem';
import { Product } from '@typings/Model';
import { getComma } from '@utils';

export interface ProductListProps {
  category: string;
}

export function MainProductList({ category }: ProductListProps) {

  const getProductList = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/products?category=${category}`);
    return response.json();
  };

  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    getProductList().then(res => {
      setProductList(res);
    });
  }, [category]);

  return (
    <ul className="product_list">
      {
        productList.length > 0 ?
          productList.map((item) => {
            return <li key={`product_${item.no}`}>
              <ProductItem
                no={item.no}
                title={item.title}
                brandName={item.brandName}
                discountRate={item.discountRate}
                price={item.price}
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