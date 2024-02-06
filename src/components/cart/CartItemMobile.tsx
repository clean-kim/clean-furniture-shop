import { MouseEvent, useContext } from 'react';
import { Calculator } from '@components/cart/Calculator';
import { CartItemProps } from '@pages/CartPage';
import { getComma } from '@utils';
import { CartDispatchContext, removeCart } from '../../contexts/CartContext';
import styles from './cartItem.module.scss';

export function CartItemMobile(params: CartItemProps) {
  const { option, count, product } = params.props;
  const cartDispatch = useContext(CartDispatchContext);

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    onRemoveButtonHandler(Number.parseInt(e.currentTarget.value));
  };

  const onRemoveButtonHandler = (no: number) => {
    cartDispatch(removeCart(no));
  };

  return (
    <li className={styles.cart_item}>
      <div className={styles.checkbox_btn_wrap}>
        {/*<CheckboxRound />*/}
        <input type='checkbox' name='cartNo' checked={params.checked} onChange={params.handleCheck} />
      </div>
      <button onClick={clickHandler} value={product.no} className={styles.rm_btn}>삭제</button>
      <figure>
        <div className={styles.product_img}>{product.category}</div>
        <figcaption>
          <div className={styles.info_block}>
            <h3 className={styles.brand_name}>{product.brandName}</h3>
          </div>
          <div className={styles.product_title}>{product.title}</div>
          <div className={styles.options}>
            <div>{`옵션: ${option}`}</div>
            <div>{`수량: ${count}`}</div>
          </div>
        </figcaption>
      </figure>
      <div className={styles.info_layout}>
        <Calculator initialCount={count ?? 1} />
        <div className={styles.price}>{`${getComma(product.price)}원`}</div>
      </div>
    </li>
  );
}