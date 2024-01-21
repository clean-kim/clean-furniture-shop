import { useContext } from 'react';
import { CartItem } from '@components/cart';
import { Cart } from '@typings/Model';
import { CartContext } from '../contexts/CartContext';

export default function CartPage() {
  const cartItems = useContext(CartContext);
  console.log('cartItems::: ', cartItems);

  return (
    <>
      {
        cartItems.length > 0 ?
          <div className='cart'>
            <table className='cart__table'>
              <colgroup>
                <col width={'125px'} style={{ textAlign: 'start' }}/>
                <col width={'500px'} />
                <col width={'180px'} />
                <col width={'180px'} />
                <col width={'295px'} />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    {/*<CheckboxRound />*/}
                    <input type='checkbox' name='cartNo' />
                  </th>
                  <th>상품정보</th>
                  <th>수량</th>
                  <th>가격</th>
                  <th>선택</th>
                </tr>
              </thead>
              <tbody>
                {/*{cartSelector.map((item: Product) => {
                  return <ProductBoxPC {...item} key={item.no}/>;
                })}*/}
                {
                  cartItems.map((item: Cart) => {
                    return <CartItem key={item.product.no} product={item.product} count={item.count} option={item.option} />;
                  })
                }
              </tbody>
            </table>
          </div>
          :
          <></>
      }
    </>
  );
}