import { MouseEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from '@components/cart/Calculator';
import { CartItemProps } from '@pages/CartPage';
import { getComma } from '@utils';
import { CartDispatchContext, removeCart } from '../../contexts/CartContext';
import styles from './cartItem.module.scss';

export function CartItemPC(params: CartItemProps) {
  const { option, count, product } = params.props;

  const cartDispatch = useContext(CartDispatchContext);
  const handleClickRemove = (e: MouseEvent<HTMLButtonElement>) => {
    cartDispatch(removeCart(Number.parseInt(e.currentTarget.value)));
  };

  return (
    <tr className={styles.cart_item}>
      {/*<td><CheckboxRound /></td>*/}
      <td><input type='checkbox' name='cartNo' checked={params.checked} onChange={params.handleCheck}  /></td>
      <td>
        <figure className={styles.item_info}>
          <div className={styles.product_img}>
            {product.category}
          </div>
          <figcaption className={styles.item_summary}>
            <h3 className={styles.brand_name}>{product.brandName}</h3>
            <div className={styles.product_title}>
              <Link to={`/detail/${product.no}`}>{product.title}</Link>
            </div>
            <div className={styles.options}>
              <div>{`옵션: ${option === '' ? '옵션없음' : ''}`}</div>
              <div>{`수량: ${count}`}</div>
            </div>
          </figcaption>
        </figure>
      </td>
      <td>
        <div className={styles.calculator_wrap}>
          <Calculator initialCount={count ?? 1} />
        </div>
      </td>
      <td>
        {`${getComma(product.price)}원`}
      </td>
      <td>
        <div>
          <button className='text_btn'>구매하기</button>
          <button className='text_btn ml10' value={product.no} onClick={handleClickRemove}>삭제하기</button>
        </div>
      </td>
    </tr>
  );
}