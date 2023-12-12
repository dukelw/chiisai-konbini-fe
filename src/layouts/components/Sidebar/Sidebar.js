import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <div className={cx('product-container', 'grid', 'wide')}>
      <div className={cx('row')}>
        <div className={cx('col', 'l-2')}>
          <div className={cx('product-sort')}>
            <p className={cx('product-sort-header')}>
              <FontAwesomeIcon className={cx('checkbox')} icon={faFilter}></FontAwesomeIcon>
              Phân loại
            </p>
            <div className={cx('product-sort-type')}>
              <ul className={cx('product-sort-type-title')}>
                <p>Theo nơi bán</p>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hà Nội
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Tp Hồ Chí Minh
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hải Phòng
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Cần Thơ
                </li>
              </ul>
            </div>
            <div className={cx('product-sort-type')}>
              <ul className={cx('product-sort-type-title')}>
                <p>Theo nơi bán</p>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hà Nội
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Tp Hồ Chí Minh
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hải Phòng
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Cần Thơ
                </li>
              </ul>
            </div>
            <div className={cx('product-sort-type')}>
              <ul className={cx('product-sort-type-title')}>
                <p>Theo nơi bán</p>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hà Nội
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Tp Hồ Chí Minh
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Hải Phòng
                </li>
                <li className={cx('product-sort-type-name')}>
                  <input type="checkbox" className={cx('checkbox')} name="" id="" />
                  Cần Thơ
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={cx('col', 'l-10')}>
          <div className={cx('grid')}>
            <div className={cx('row', 'sort-row')}>
              <label className={cx('sort-zone')} htmlFor="sort-type-select">
                Phân loại
              </label>
              <div name="sort-type" id="sort-type-select">
                <p id="selected-sort-option">
                  Liên quan <i className="fa-solid fa-caret-down"></i>
                </p>
                <div className={cx('sort-option-list')}>
                  <div className={cx('sort-option')} value="relate">
                    Liên quan
                  </div>
                  <div className={cx('sort-option')} value="newest">
                    Mới nhất
                  </div>
                  <div className={cx('sort-option')} value="hotsale">
                    Bán chạy
                  </div>
                  <div className={cx('sort-option')} value="low-price">
                    Giá thấp
                  </div>
                  <div className={cx('sort-option')} value="high-price">
                    Giá cao
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
