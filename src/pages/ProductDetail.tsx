import { useContext } from 'react';
import { Cart } from '@typings/Model';
import { addCart, CartDispatchContext } from '../contexts/CartContext';

export default function ProductDetail() {

  const cartDispatch = useContext(CartDispatchContext);

  const tempData: Cart = {
    count: 1,
    option: 'no',
    product: {
      brandName: 'brandName',
      category: 'category',
      discountPrice: 500,
      discountRate: 50,
      isFavorite: false,
      no: 1,
      price: 1000,
      priceText: 'priceText',
      title: 'title',
    },
  };

  const handleClick = () => {
    cartDispatch(addCart({ cartItem: tempData }));
  };

  return (
    <section>
      <div className="product_info_container">
        <div className="product_img">
          
        </div>
        <div className="product_info">
          <div className="product_brand_name">{'brandName'}</div>
          <p className="product_title">{'title'}</p>
          <span className="product_price">{'price'} {'priceText'}</span>
        </div>
        <button onClick={handleClick}>cart</button>
      </div>
    </section>
  );
}