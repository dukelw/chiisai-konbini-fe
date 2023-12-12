import classNames from 'classnames/bind';
import styles from './HeaderAndSidebar.module.scss';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function HeaderAndSidebar({ children }) {
  return (
    <div>
      <Header></Header>
      <div className={cx('product-container', 'grid', 'wide', 'container')}>
        <div className={cx('row')}>
          <Sidebar></Sidebar>
          <div className={cx('content', 'col', 'l-10')}>{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HeaderAndSidebar;
