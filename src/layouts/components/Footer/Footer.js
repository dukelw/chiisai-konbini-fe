import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx('grid', 'footer')}>
      <div className={cx('row')}>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Chính sách</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Chính sách đổi trả 60 ngày
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Chính sách khuyến mãi
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Chính sách giao hàng
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Chính sách bảo mật
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Chăm sóc khách hàng</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Trải nghiệm của khách hàng
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Hỏi đáp - FAQs
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Tư vấn
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Tuyển dụng</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Tuyển dụng
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Đăng ký bản quyền
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Địa chỉ liên hệ</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                <span className="footer_list-item-office">Văn phòng Hà Nội:</span>
                Tầng 6 tòa nhà Berlin, Đường Phan Đình Phùng, Cầu Giấy, Hà Nội
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                <span className="footer_list-item-office">Văn phòng Tp Hồ Chí Minh:</span>
                Tầng 56 tòa nhà Viettel, Đường CMT8, Quận 10, Tp Hồ Chí Minh
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx('row')}>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Wisland</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Đăng ký thành viên
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Ưu đãi và đặc quyền
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>lewis.com</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Lịch sử thay đổi website
              </a>
            </li>
          </ul>
        </div>
        <div className={cx('col', 'l-3')}>
          <ul className={cx('footer_list')}>
            <li className={cx('footer_list-item')}>
              <p className={cx('footer_list-item-header')}>Câu chuyện của chúng tôi</p>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Khởi nguồn
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Nhà máy
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Công nghệ
              </a>
            </li>
            <li className={cx('footer_list-item')}>
              <a href="/" className={cx('footer_list-item-link')}>
                Chứng nhận và thành tựu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
