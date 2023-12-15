import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Cart() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('grid')}>
        <div className={cx('row', 'cart-row', 'card-row-main-header')}>
          <div className={cx('col', 'cart-col', 'l-4')}>
            <input type="checkbox" className={cx('checkbox')} />
            <span>Sản phẩm</span>
          </div>
          <div className={cx('col', 'cart-col', 'l-2')}>
            <p>Đơn giá</p>
          </div>
          <div className={cx('col', 'cart-col', 'l-2')}>
            <p>Đơn giá</p>
          </div>
          <div className={cx('col', 'cart-col', 'l-2')}>
            <p>Đơn giá</p>
          </div>
          <div className={cx('col', 'cart-col', 'l-2')}>
            <p>Đơn giá</p>
          </div>
        </div>

        <div className={cx('row', 'cart-row')}>
          <div className={cx('col', 'cart-col', 'card-col-header', 'l-12', 'shop')}>
            <input type="checkbox" className={cx('checkbox')} />
            <p className={cx('shop-name')}>The VI</p>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('row', 'cart-row')}>
          <div className={cx('col', 'cart-col', 'card-col-header', 'l-12', 'shop')}>
            <input type="checkbox" className={cx('checkbox')} />
            <p className={cx('shop-name')}>The VI</p>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('row', 'cart-row')}>
          <div className={cx('col', 'cart-col', 'card-col-header', 'l-12', 'shop')}>
            <input type="checkbox" className={cx('checkbox')} />
            <p className={cx('shop-name')}>The VI</p>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
          <div className={cx('grid', 'product')}>
            <div className={cx('row')}>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-4')}>
                <input type="checkbox" className={cx('checkbox')} />
                <div className={cx('product-info')}>
                  <img
                    className={cx('product-img')}
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/08/09/komi-cant-communicate-2-1555.jpg"
                    alt="Tadano"
                  />
                  <p className={'product-name'}>Tadano Hitohito</p>
                </div>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <input className={cx('quantity')} type="number" defaultValue={1} min={1} max={100} />
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <p>500000</p>
              </div>
              <div className={cx('col', 'cart-col', 'card-col-product', 'l-2')}>
                <Button primary>Xóa</Button>
              </div>
            </div>
          </div>
        </div>

        <div className={cx('row', 'cart-row', 'buy')}>
          <div className={cx('discharge')}>
            <div>
              <input type="checkbox" className={cx('checkbox')} />
              <span>Chọn tất cả</span>
            </div>
            <Button primary className={cx('discharge-button')}>
              Voucher
            </Button>
          </div>
          <div className={cx('discharge')}>
            <p>
              Tổng tiền: <span>6300000</span>
            </p>
            <Button primary className={cx('discharge-button')}>Thanh toán</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
