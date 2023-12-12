import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/Popper/Wrapper';
import ProductItem from './ProductItem';

const cx = classNames.bind(styles);

const searchResult = [
  {
    name: 'Giày thể thao Shondo',
    image: 'https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg',
    path: '/product/giaythethaoshondo',
    price: 200000,
  },
  {
    name: 'Giày thể thao Shondo',
    image: 'https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg',
    path: '/product/giaythethaoshondo',
    price: 200000,
  },
  {
    name: 'Giày thể thao Shondo',
    image: 'https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg',
    path: '/product/giaythethaoshondo',
    price: 200000,
  },
  {
    name: 'Giày thể thao Shondo',
    image: 'https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg',
    path: '/product/giaythethaoshondo',
    price: 200000,
  },
  {
    name: 'Giày thể thao Shondo',
    image: 'https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg',
    path: '/product/giaythethaoshondo',
    price: 200000,
  },
];

function Search() {
  return (
    <div>
      <HeadlessTippy
        visible
        interactive
        placement="bottom-end"
        render={(attrs) => {
          return (
            <div className={cx('search-result')} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h2 className={cx('heading')}>Kết quả tìm kiếm</h2>
                {searchResult.map((result, index) => {
                  return <ProductItem key={index} data={result}></ProductItem>;
                })}
                <p className={cx('more')}>Xem thêm</p>
              </PopperWrapper>
            </div>
          );
        }}
      >
        <div className={cx('navigation_search')}>
          <label htmlFor="" className={cx('navigation_search-field')}>
            <input placeholder="Find product..." type="text" className={cx('navigation_search-input')} />
            <Link className={cx('navigation_search-icon')}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={cx('fz-16', 'primary-icon-no-hover')}
              ></FontAwesomeIcon>
            </Link>
          </label>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
