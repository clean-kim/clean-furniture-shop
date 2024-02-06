import { useContext } from 'react';
import { CartMobile, CartPC } from '@components/cart';
import { Cart } from '@typings/Model';
import { CartContext } from '../contexts/CartContext';
import { useIsMobile } from '../utils/useIsMobile';

export interface CartListProps {
  list: Cart[];
}

export interface CartItemProps {
  props: Cart;
  checked: boolean;
  handleCheck: () => void;
}

export default function CartPage() {
  const cartItems = useContext(CartContext);
  const isMobile = useIsMobile();

  return (
    <div className='cart'>
      {!isMobile ?
        <CartPC list={cartItems} />
        :
        <CartMobile list={cartItems} />}
    </div>
  );
}