import { Link } from 'react-router-dom';
import { black_chair } from '@assets/img/product_img';
import styles from '@components/common/product.module.scss';

type Props = {
  no: number;
  brandName: string;
  discountRate: number;
  price: number;
  priceText: string;
  title: string;
};

export function ProductItem(props: Props) {
  const { no, brandName, priceText, title } = props;

  // const favorite = () => {
  //   Storage()?.setArray('favorite', no);
  // }
  //
  // const getFavorite = () => {
  //   return Storage()?.getArray('favorite').findIndex(item => item === no) > -1;
  // }
  //
  // const getDiscountAmount = (discountRate, cost) => {
  //   const result = cost - cost * (discountRate / 100);
  //   return getComma(result);
  // }

  return (
    <>
      <div className={styles.product}>
        {/*<div className={styles.product_badge}>*/}
        {/*  <Badge/>*/}
        {/*</div>*/}
        <Link to={`/detail/${no}`} className={styles.bg_link}>
          <div className={styles.img_wrap}>
            {/*<button className={styles.btn_favorite} onClick={favorite}>*/}
            {/*  <Image src={getFavorite() ? icon_heart_fill : icon_heart} alt=''/>*/}
            {/*</button>*/}
            <img src={black_chair} alt={title} className={styles.product_img} />
          </div>
        </Link>
        <div className={styles.info_wrap}>
          {/*<a href={`/brand`} className={styles.hidden_link}>{brandName}</a>*/}
          <Link to={`/detail/${no}`}>
            <div className={styles.brand_name}>
              {brandName}
            </div>
            <div className={styles.product_title}>
              {title}
            </div>
            <div className={styles.product_amount}>&#8361; {priceText}</div>
          </Link>
        </div>
      </div>
    </>
  );

}