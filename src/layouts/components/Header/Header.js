import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import BeforeNav from './BeforeNav';
import MainNav from './MainNav';

const cx = classNames.bind(styles);

function Header() {
  return (
    <nav className={cx('navigation_container')}>
      <BeforeNav />
      <MainNav />
    </nav>
  );
}

export default Header;
