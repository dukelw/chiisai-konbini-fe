import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './ProductDetail.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faMessage, faStore } from '@fortawesome/free-solid-svg-icons';
import FeatureCard from '~/components/FeatureCard';

const cx = classNames.bind(styles);

const PRODUCT_POLICY = [
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
  {
    header: <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>,
    message: 'Đổi trả cực dễ chỉ cần số điện thoại',
  },
];

function ProductDetail({ data }) {
  return (
    <div className={cx('wrapper')}>
      <h1>Product Detail</h1>
      <div className={cx('product')}>
        <div className={cx('product-img')}>
          <img
            src="https://c.wallhere.com/photos/f7/53/Komi_san_wa_Comyushou_desu_small_boobs_no_bra_anime_girls_school_uniform_JK_long_hair_blue_skirt-1881031.jpg!d"
            alt="Komi"
          />
        </div>
        <div className={cx('product-actions')}>
          <div className={cx('product-info')}>
            <h2 className={cx('product-name')}>Komi-san can't communicate</h2>
            <h3 className={cx('product-price')}>9999999</h3>
          </div>
          <div className={cx('product-option')}>
            <div className={cx('product-section')}>
              <p className={cx('label')}>Đen xanh</p>
              <div className={cx('option')}>
                <Button primary>White</Button>
                <Button primary>Black</Button>
                <Button primary>Grey</Button>
              </div>
            </div>
            <div className={cx('product-section')}>
              <p className={cx('label')}>Kích thước</p>
              <div className={cx('option')}>
                <Button primary>29</Button>
                <Button primary>30</Button>
                <Button primary>31</Button>
                <Button primary>32</Button>
                <Button primary>33</Button>
              </div>
            </div>
            <div className={cx('product-section')}>
              <div className={cx('product-quantity')}>
                <label className={cx('label')} htmlFor="quantity">
                  Số lượng hàng:
                </label>
                <input
                  className={cx('quantity')}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="100"
                  defaultValue={1}
                />
              </div>
              <div>
                <Button primary>Thêm vào giỏ hàng</Button>
                <Button primary>Đặt ngay</Button>
              </div>
            </div>
            <div className={cx('product-section', 'grid')}>
              <div className={cx('row')}>
                {PRODUCT_POLICY.map((policy, index) => {
                  return (
                    <div key={index} className={cx('col', 'l-4', 'feature-col')}>
                      <FeatureCard white small data={policy}></FeatureCard>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={cx('product-section')}>
              <p className={cx('label')}>Đặc điểm nổi bật</p>
              <ul className={cx('feature-list')}>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
                <li className={cx('feature-item')}>
                  This is the feature of the product, discribe it to your customers and then they will buy
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('shop')}>
        <div className={cx('grid')}>
          <div className={cx('row')}>
            <div className={cx('col', 'l-3', 'first-col')}>
              <img
                className={cx('shop-img')}
                src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                alt="Shop"
              />
              <div className={cx('shop-about')}>
                <div className={cx('shop-info')}>
                  <p className={cx('shop-name')}>The VI</p>
                  <p className={cx('lastest-online')}>27 phút trước</p>
                </div>
                <div className={cx('shop-nav')}>
                  <Button primary leftIcon={<FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>}>
                    Chat ngay
                  </Button>
                  <Button primary leftIcon={<FontAwesomeIcon icon={faStore}></FontAwesomeIcon>}>
                    Xem shop
                  </Button>
                </div>
              </div>
            </div>
            <div className={cx('col', 'l-3', 'other-col')}>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
            </div>
            <div className={cx('col', 'l-3', 'other-col')}>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
            </div>
            <div className={cx('col', 'l-3', 'other-col')}>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
              <p className={cx('criteria')}>
                Đánh giá<span className={cx('figure')}>41.9k</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('detail')}>
        <h1>Detail Section</h1>
      </div>
      <div className={cx('comment')}>
        <h1>Comment Section</h1>
      </div>
    </div>
  );
}

export default ProductDetail;
