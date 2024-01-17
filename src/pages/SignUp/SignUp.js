import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { REACT_APP_API_KEY, REACT_APP_API_URL } from '~/private/constant';

const cx = classNames.bind(styles);

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const apiUrl = REACT_APP_API_URL + 'shop/signup';
    const apiKey = REACT_APP_API_KEY;
    console.log(apiKey);

    const requestData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(apiUrl, requestData)
      .then((response) => response.json())
      .then((data) => {
        console.log('Response:', data);
      })
      .catch((error) => console.error(error));
  }

  function handleEmail(newEmail) {
    setEmail(newEmail);
  }

  function handlePassword(newPassword) {
    setPassword(newPassword);
  }

  function handleName(newName) {
    setName(newName);
  }

  function handleConfirmedPassword(newPassword) {
    setConfirmedPassword(newPassword);
  }

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
            <input
              id="fullname"
              name="fullname"
              type="text"
              placeholder="VD: Lê Vĩ"
              className={cx('form-control')}
              value={name}
              onChange={(e) => handleName(e.target.value)}
            />
            <span className={cx('form-message')}></span>
          </div>

          <div className={cx('form-group')}>
            <label htmlFor="email" className={cx('form-label')}>
              Email
            </label>
            <input
              value={email}
              onChange={(e) => handleEmail(e.target.value)}
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
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
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
              value={confirmedPassword}
              onChange={(e) => handleConfirmedPassword(e.target.value)}
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Nhập lại mật khẩu"
              className={cx('form-control')}
            />
            <span className={cx('form-message')}></span>
          </div>

          <button className={cx('form-submit')} onClick={(e) => handleSubmit(e)}>
            Đăng ký
          </button>

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
