import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartItemMobile } from '@components/cart/CartItemMobile';
import { useCheckbox } from '@hooks';
import { CartListProps } from '@pages/CartPage';
import { Cart } from '@typings/Model';

export function CartMobile({ list }: CartListProps) {

  const { allChecked, handleAllCheckClick, checkList, handleCheckClick } = useCheckbox(list);

  useEffect(() => {}, [checkList, allChecked]);

  return (
    <>
      {
        list.length > 0 ?
          <>
            <div className='cart_header'>
              <div className='checkbox_container'>
                {/*<CheckboxRound /> 전체선택*/}
                <input type='checkbox' id='all' checked={allChecked} onChange={handleAllCheckClick}/>
                <label htmlFor="all">전체선택</label>
              </div>
              <button>삭제</button>
            </div>
            <ul className='cart_list'>
              {list.map((item: Cart, index) => {
                return <CartItemMobile key={item.product.no} props={item} checked={checkList[index]} handleCheck={() => handleCheckClick(index)} />;
              })}
            </ul>
            <div className='cart_footer'>
              <button className='order_btn'>주문하기</button>
            </div>
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