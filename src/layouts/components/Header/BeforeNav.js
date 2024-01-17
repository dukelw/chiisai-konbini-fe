import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NAVIGATION_SITE_CONTENT_LEFT = [
  {
    title: 'Bán hàng cùng chúng tôi',
    path: '/seller/signin',
  },
  {
    title: 'Chăm sóc khách hàng',
    path: '/customer-care',
  },
  {
    title: 'Kênh xã hội',
    path: '/social-network',
  },
];

const NAVIGATION_SITE_CONTENT_RIGHT = [
  {
    title: 'Tham gia ChiisaiKonbiniLand',
    path: '/chiisaikonbiniland',
  },
  {
    title: 'Thảo luận',
    path: '/discussion',
  },
  {
    title: 'Về chúng tôi',
    path: '/about',
  },
];

function BeforeNav() {
  return (
    <div className={cx('navigation_side-content')}>
      <ul className={cx('navigation_side-content-right-list')}>
        {NAVIGATION_SITE_CONTENT_LEFT.map((content, index) => {
          return (
            <li key={index} className={cx('navigation_side-content-item')}>
              <Link className={cx('navigation_side-content-item-link')} to={content.path}>
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className={cx('navigation_side-content-left-list')}>
        {NAVIGATION_SITE_CONTENT_RIGHT.map((content, index) => {
          return (
            <li key={index} className={cx('navigation_side-content-item')}>
              <Link className={cx('navigation_side-content-item-link')} to={content.path}>
                {content.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BeforeNav;
