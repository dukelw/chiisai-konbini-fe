import classNames from "classnames/bind";
import styles from './ProductItem.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function ProductItem({data}) {
  return (
    <Link to={data.path} className={cx('link')}>
      <div className={cx('wrapper')}>
        <img className={cx('img')} src={data.image} alt={data.name} />
        <div className={cx('info')}>
          <h3 className={cx('name')}>{data.name}</h3>
          <p className={cx('price')}>{data.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;