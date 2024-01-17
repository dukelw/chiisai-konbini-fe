import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faLanguage, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import PopperWrapper from '~/components/Popper/Wrapper';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Search from '../Search';

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

const LANGUAGE = [
  {
    title: 'Tiếng Việt',
    code: 'vi',
  },
  {
    title: 'English',
    code: 'en',
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
        <HeadlessTippy interactive render={attrs => {
          return (
            <PopperWrapper {...attrs}>
              <div className={cx('language')}>
                <h3 className={cx('language-title')}>Ngôn ngữ</h3>
                {LANGUAGE.map((language, index) => {
                  return (
                    <Link key={index} to={language.path} className={cx('language-item')}>
                      {language.title}
                    </Link>
                  )
                })}
              </div>
            </PopperWrapper>
          )
        }}>
          <div className={cx('action')}>
            <Button primary>
              <FontAwesomeIcon icon={faLanguage}></FontAwesomeIcon>
            </Button>
          </div>
        </HeadlessTippy>
        <div className={cx('action')}>
          <Button primary to={'/buyer/signin'}>
            <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
          </Button>
        </div>
        <div className={cx('action')}>
          <Button primary to={'/cart'}>
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
