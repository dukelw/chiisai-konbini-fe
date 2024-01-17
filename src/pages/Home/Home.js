import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import ProductCard from '~/components/ProductCard';
import Button from '~/components/Button';
import CategoryCard from '~/components/CategoryCard';

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

const CATEGORY = [
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
  {
    name: 'Thời trang nam',
    image: 'https://eurocook.com.vn/Data/upload/images/tu%CC%89%20la%CC%A3nh/tu-lanh-aqua.jpg',
  },
];

function Home() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('section')}>
        <Link to={'/'}>
          <div className={cx('suggestion')}>
            <img
              className={cx('new')}
              src="https://maylanhgiasi.net/data/upload/may-lanh-panasonic-n-kh-8.jpg"
              alt="Nổi bật"
            />
            <div className={cx('suggestion-nav')}>
              <p className={cx('label')}>Những người khác cũng quan tâm</p>
              <Button primary>Đến xem thử</Button>
            </div>
          </div>
        </Link>
      </div>

      <div className={cx('section')}>
        <h2 className={cx('label')}>Danh mục</h2>
        <div className={cx('grid')}>
          <div className={cx('row')}>
            {CATEGORY.map((category, index) => {
              return <CategoryCard className={cx('col', 'l-1')} data={category} key={index}></CategoryCard>;
            })}
          </div>
        </div>
      </div>

      <div className={cx('section')}>
        <h2 className={cx('label')}>Gợi ý cho bạn</h2>
        <div className={cx('grid')}>
          <div className={cx('section-row', 'row', 'sm-gutter')}>
            {PRODUCT.map((product, index) => {
              return <ProductCard key={index} data={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
