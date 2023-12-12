import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from './ProductCard.module.scss'

const cx = classNames.bind(styles)


function ProductCard({ data }) {
  return (
    <div className={cx('col', 'product-col', 'l-2', 'm-4', 'c-6')}>
      <Link to={data.path} className={cx('product-link')}>
        <img className={cx('product-img')} src={data.image} alt="" />
        <div className={cx('product-infor')}>
          <p className={cx('product-name')}>{data.name}</p>
          <div className={cx('product-price')}>
            <p className={cx('product-old-price')}>{data.price}</p>
            <p className={cx('product-new-price')}>{data.price}</p>
          </div>
          <p className={cx('product-sell-status')}></p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;