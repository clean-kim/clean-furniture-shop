import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '@components/cart';
import { Cart } from '@typings/Model';
import { CartContext } from '../contexts/CartContext';

export default function CartPage() {
  const cartItems = useContext(CartContext);
  console.log('cartItems::: ', cartItems);

  return (
    <div className='cart'>
      {
        cartItems.length > 0 ?
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
          :
          <div className='empty_cart'>
            <p>장바구니가 비었습니다.</p>
            <div>
              <Link to={'/'} className='shop_btn'>
                <span className="btn__icon-wrap">
                  <svg width="10" className="btn__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                  </svg>
                  <svg className="btn__icon-svg-svg  btn__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z" />
                  </svg>
                </span>
                쇼핑하러 가기
              </Link>
            </div>
          </div>
      }
    </div>
  );
}