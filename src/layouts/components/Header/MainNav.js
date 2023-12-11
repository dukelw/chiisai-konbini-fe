import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
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
                <span>
                  <i className="fa-solid fa-list"></i>
                  {content.title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      <Search />

      {/* Actions */}
      <ul className={cx('navigation_list')}>
        <li className={cx('navigation_list-item')}>
          <Link className={cx('navigation_list-item-link')}>
            <FontAwesomeIcon className={cx('primary-icon')} icon={faLanguage}></FontAwesomeIcon>
          </Link>
        </li>
        <li className={cx('navigation_list-item')}>
          <Link className={cx('navigation_list-item-link')} to="/signin">
            <FontAwesomeIcon className={cx('primary-icon')} icon={faUserCircle}></FontAwesomeIcon>
          </Link>
        </li>
        <li className={cx('navigation_list-item')}>
          <Link className={cx('navigation_list-item-link')} to="/cart">
            <FontAwesomeIcon className={cx('primary-icon')} icon={faCartShopping}></FontAwesomeIcon>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MainNav;
