import { Link } from 'react-router-dom';
import { CartItemPC } from '@components/cart/CartItemPC';
import { CartListProps } from '@pages/CartPage';
import { Cart } from '@typings/Model';
import { useCheckbox } from '@hooks';

export function CartPC({ list }: CartListProps) {
  const { allChecked, handleAllCheckClick, checks, handleCheckClick } = useCheckbox(list);

  return (
    <>
      {
        list.length > 0 ?
          <>
            <h2 className='section_title mt40'>CART</h2>
            <table className='cart__table'>
              <colgroup>
                <col width={'5%'} style={{ textAlign: 'start' }}/>
                <col width={'55%'} />
                <col width={'12.5%'} />
                <col width={'12.5%'} />
                <col width={'15%'} />
              </colgroup>
              <thead>
                <tr>
                  <th>
                    {/*<CheckboxRound />*/}
                    <input type='checkbox' name='cartNo' id='all' checked={allChecked} onChange={handleAllCheckClick} />
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
                  list.map((item: Cart, index) => {
                    return <CartItemPC key={item.product.no} props={item} checked={checks[index]} handleCheck={() => handleCheckClick(index)} />;
                  })
                }
              </tbody>
            </table>
          </>
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
    </>
  );
}