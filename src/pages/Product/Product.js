import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Product.module.scss';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import ProductCard from '~/components/ProductCard';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

const PRODUCT = [
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
  {
    name: 'Tủ lạnh',
    path: '/product/tulanh',
    image: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg',
    price: 2000000,
  },
];

function Product() {
  return (
    <div className={cx('grid')}>
      <div className={cx('row', 'sort-row')}>
        <Button className={cx('sort-zone')} outline large disabled>Phân loại</Button>
        <Button primary large rightIcon={<FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>}>Liên quan</Button>
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
