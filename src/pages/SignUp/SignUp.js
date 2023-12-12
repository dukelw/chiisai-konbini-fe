import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SignUp() {
  return (
    <div className={cx('login_container')}>
      <div className={cx('login_left')}></div>
      <div className={cx('login_right')}>
        <form action="/user/register" method="POST" className={cx('form')} id="form-regist">
          <h3 className={cx('heading')}>
            <Link className={cx('heading_link')} to="/signin">
              Đăng nhập
            </Link>
            <p className={cx('heading_space')}>hoặc</p>
            <a className={cx('heading_link', 'current')} href="/user/register">
              Đăng ký
            </a>
          </h3>

          <div className={cx('spacer')}></div>

          <div className={cx('form-group')}>
            <label htmlFor="fullname" className={cx('form-label')}>
              Tên đầy đủ
            </label>
            <input id="fullname" name="fullname" type="text" placeholder="VD: Lê Vĩ" className={cx('form-control')} />
            <span className={cx('form-message')}></span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="email" className={cx('form-label')}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="VD: email@domain.com"
              className={cx('form-control')}
            />
            <span className={cx('form-message')}></span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="password" className={cx('form-label')}>
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Nhập mật khẩu"
              className={cx('form-control')}
            />
            <span className={cx('form-message')}></span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="password_confirmation" className={cx('form-label')}>
              Nhập lại mật khẩu
            </label>
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Nhập lại mật khẩu"
              className={cx('form-control')}
            />
            <span className={cx('form-message')}></span>
          </div>

          <button className={cx('form-submit')}>Đăng ký</button>

          <div className={cx('breakline-container')}>
            <div className={cx('breakline')}></div>
            <span className={cx('heading_space')}>Hoặc</span>
            <div className={cx('breakline')}></div>
          </div>

          <div className={cx('other-login-way')}>
            <div className={cx('google')}>
              <a className={cx('social-link')} href="/">
                <img
                  className={cx('login-site-logo')}
                  src="https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
                  alt="google_logo"
                />
                <p className={cx('big-brand-name')}>Google</p>
              </a>
            </div>
            <div className={cx('facebook')}>
              <a className={cx('social-link')} href="/">
                <img
                  className={cx('login-site-logo')}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
                  alt="facebook_logo"
                />
                <p className={cx('big-brand-name')}>Facebook</p>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
