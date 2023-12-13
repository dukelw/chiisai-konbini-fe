import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import Search from '../Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLanguage, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const NAVIGATION_MAIN_CONTENT = [
  {
    title: 'Tất cả',
    path: '/',
  },
  {
    title: 'Khuyến mãi',
    path: '/sale',
  },
  {
    title: 'Sản phẩm',
    path: '/product',
  },
  {
    title: 'Quà tặng',
    path: '/gift',
  },
];

function MainNav() {
  return (
    <div className={cx('navigation_main-content')}>
      {/* Logo */}
      <div className={cx('navigation_logo')}>
        <Link to="/" className={cx('navigation_logo-link')}>
          <div className={cx('navigation_logo-img')}></div>
        </Link>
      </div>

      {/* Navigation */}
      <ul className={cx('navigation_list')}>
        {NAVIGATION_MAIN_CONTENT.map((content, index) => {
          return (
            <li key={index} className={cx('navigation_list-item')}>
              <Link to={content.path} className={cx('navigation_list-item-link')}>
                <span>{content.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <Search />

      <div className={cx('actions')}>
        <Button primary>
          <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
        </Button>
        <Button primary to={'/signin'}>
          <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
        </Button>
        <Button primary to={'/cart'}>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </Button>
      </div>
    </div>
  );
}

export default MainNav;
