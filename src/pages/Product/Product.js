import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Product.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '~/components/ProductCard';
const cx = classNames.bind(styles);

const PRODUCT = [
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
];

function Product() {
  return (
    <div className={cx('grid')}>
      <div className={cx('row', 'sort-row')}>
        <label className={cx('sort-zone')} htmlFor="sort-type-select">
          Phân loại
        </label>
        <div name="sort-type" className={cx('sort-type-select')}>
          <p className={cx('selected-sort-option')}>
            Liên quan <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
          </p>
          <div className={cx('sort-option-list')}>
            <div className={cx('sort-option')} value="relate">
              Liên quan
            </div>
            <div className={cx('sort-option')} value="newest">
              Mới nhất
            </div>
            <div className={cx('sort-option')} value="hotsale">
              Bán chạy
            </div>
            <div className={cx('sort-option')} value="low-price">
              Giá thấp
            </div>
            <div className={cx('sort-option')} value="high-price">
              Giá cao
            </div>
          </div>
        </div>
      </div>
      <div className={cx('row')}>
        {PRODUCT.map((product, index) => {
          return (<ProductCard key={index} data={product}></ProductCard>);
        })}
      </div>
    </div>
  );
}

export default Product;
