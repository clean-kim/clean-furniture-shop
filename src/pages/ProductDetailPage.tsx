import { MouseEvent, useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Modal } from '@components/common/Modal';
import { Cart, Product } from '@typings/Model';
import { CalculateDiscountRate, getComma } from '@utils';
import { addCart, CartDispatchContext } from '../contexts/CartContext';

export default function ProductDetailPage() {
  const product = (useLoaderData() as Product[])[0];
  const cartDispatch = useContext(CartDispatchContext);

  const cartData: Cart = {
    count: 1,
    option: 'no',
    product,
  };
  const handleClick = () => {
    cartDispatch(addCart({ cartItem: cartData }));
    setModalOpen(true);
  };

  const handleAccordionClick = (e: MouseEvent<HTMLLIElement>) => {
    const { classList, parentElement } = e.currentTarget;
    if (!classList.contains('open')) {
      if (parentElement) {
        parentElement.childNodes.forEach(item => {
          if (item instanceof HTMLElement) {
            item.classList.remove('open');
          }
        });
        classList.add('open');
      }
    } else {
      classList.remove('open');
    }
  };

  const [isModalOpen, setModalOpen] = useState(false);
  const handleRequestClose = () => {
    setModalOpen(false);
  };

  return (
    <section className='detail'>
      <div className='product_container'>
        <div>
          <div className='product_thumbnail_wrap'>
            <div className='product_thumbnail'>
              {product.category}
            </div>
          </div>
        </div>
        <div className='info_container'>
          <div className='product_info'>
            <div className='product_brand_name'>{product.brandName}</div>
            <h3 className='product_title'>{product.title}</h3>
            <p className='product_description'>인테리어는 공간을 더욱 아름답고 기능적으로 만드는 미학적인 행위입니다.<br/> 각각의 공간이 가지고 있는 특성과 기능을 고려하여, 색상, 물질, 조명, 가구 배치 등을 계획하게 됩니다.<br/> 좋은 인테리어는 단순히 미적인 요소로서의 역할뿐만 아니라, 공간의 사용자의 생활 품질을 향상시키는 역할을 합니다.<br/>
              인테리어는 개인의 취향과 스타일을 반영할 수 있으며, 공간의 효율성을 높여주는 동시에 편안함을 제공합니다. 또한, 적절한 인테리어는 공간의 크기를 visuallly 늘리거나 줄일 수 있으며, 특정 분위기를 연출하는데도 중요한 역할을 합니다.<br/> 따라서, 인테리어는 우리의 생활 공간을 더욱 풍요롭고 즐겁게 만드는 중요한 요소입니다.</p>
            <div className='product_price_wrap'>
              <span className='product_discount_price'>{getComma(product.price)}</span>
              <span className='product_price'>&#8361; {getComma(CalculateDiscountRate(product.price, product.discountRate))}</span>
            </div>
            <div className='product_btn_wrap'>
              <button onClick={handleClick} className='add_cart'>장바구니 담기</button>
              { isModalOpen && <Modal isModalOpen={isModalOpen} onRequestClose={handleRequestClose} /> }
            </div>
          </div>
          <div>
            <ul className='accordion'>
              <li className='accordion__item' onClick={handleAccordionClick}>
                <div className='item__title'>MATERIAL<span>+</span></div>
                <p>재질이란 물체가 가진 특성이나 속성을 일컫는 말입니다. 이는 물체의 강도, 탄성, 경도, 비중 등 다양한 물리적 특성을 포함하며, 이러한 특성은 물체가 특정 환경이나 조건에 어떻게 반응할지를 결정합니다. 또한 재질은 물체의 표면 질감, 색상, 광택도 등 외관적 특성을 결정하며, 이는 물체가 우리 눈에 어떻게 보이는지, 촉감은 어떤지에 영향을 줍니다.</p>
              </li>
              <li className='accordion__item' onClick={handleAccordionClick}>
                <div className='item__title'>DETAILS<span>+</span></div>
                <p>가구는 생활공간을 편리하고 효율적으로 사용할 수 있도록 도와주는, 다양한 기능과 디자인을 가진 생활용품입니다.</p>
              </li>
              <li className='accordion__item' onClick={handleAccordionClick}>
                <div className='item__title'>SHIPPING<span>+</span></div>
                <p>오후 12시 전까지 주문 시 3일 이내 배송</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}