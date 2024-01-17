import classNames from 'classnames/bind';
import styles from './BuyerSignUp.module.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { REACT_APP_API_KEY, REACT_APP_API_URL } from '~/private/constant';
const cx = classNames.bind(styles);

function BuyerSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const apiUrl = REACT_APP_API_URL + 'shop/signin';
    const apiKey = REACT_APP_API_KEY;

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
        if (data.status !== 'error') {
          navigate('/');
        }
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
    <form className={cx('box')}>
      <div className={cx('container')}>
        <div className={cx('top-header')}>
          <Link to={'/buyer/signin'} className={cx('title')}>
            Have an account?
          </Link>
          <header className={cx('header')}>Signup</header>
        </div>
        <div className={cx('input-field')}>
          <input
            value={name}
            onChange={(e) => handleName(e.target.value)}
            type="text"
            className={cx('input')}
            placeholder="Username"
            required
          />
          <i className={cx('icon bx bx-user')}></i>
        </div>
        <div className={cx('input-field')}>
          <input
            value={email}
            onChange={(e) => handleEmail(e.target.value)}
            type="text"
            className={cx('input')}
            placeholder="Email"
            required
          />
          <i className={cx('icon bx bx-user')}></i>
        </div>
        <div className={cx('input-field')}>
          <input
            value={password}
            onChange={(e) => handlePassword(e.target.value)}
            type="password"
            className={cx('input')}
            placeholder="Password"
            required
          />
          <i className={cx('icon bx bx-lock-alt')}></i>
        </div>
        <div className={cx('input-field')}>
          <input
            value={confirmedPassword}
            onChange={(e) => handleConfirmedPassword(e.target.value)}
            type="password"
            className={cx('input')}
            placeholder="Confirm password"
            required
          />
          <i className={cx('icon bx bx-lock-alt')}></i>
        </div>
        <div className={cx('input-field')}>
          <input onClick={handleSubmit} type="submit" className={cx('submit')} value="Login" />
        </div>
        <div className={cx('bottom')}>
          <div className={cx('left')}>
            <input type="checkbox" id="check" />
            <label htmlFor="check"> Remember Me</label>
          </div>
          <div className={cx('right')}>
            <label>
              <Link href="#">Forgot password?</Link>
            </label>
          </div>
        </div>
        <div className={cx('breakline-container')}>
          <div className={cx('breakline')}></div>
          <span className={cx('heading_space')}>Or</span>
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
      </div>
    </form>
  );
}
export default BuyerSignUp;
