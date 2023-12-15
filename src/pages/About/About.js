import classNames from "classnames/bind";
import styles from './About.module.scss'
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPortrait } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function About() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('author')}>
        <p className={cx('author-heading')}>
          Trang web này là một sản phẩm của{' '}
          <a href="/" className={cx('name', 'shake-on-hover')}>
            Lewis
          </a>
        </p>
        <img
          className={cx('avatar')}
          src="https://i.pinimg.com/736x/f5/c7/c7/f5c7c7aaa6fa24d07793d41ca59958fa.jpg"
          alt="Lewis"
        />
        <div className={cx('navigation')}>
          <Button to={'/'} leftIcon={<FontAwesomeIcon icon={faPortrait}></FontAwesomeIcon>} primary>
            Porfolio
          </Button>
        </div>
      </div>
      <div className={cx('product')}>
        <p className={cx('product-heading')}>Chiisai Konbini - Dự án fullstack đầu tay</p>
        <img
          className={cx('avatar')}
          src="https://i.pinimg.com/736x/f5/c7/c7/f5c7c7aaa6fa24d07793d41ca59958fa.jpg"
          alt="Lewis"
        />
        <div className={cx('navigation')}>
          <Button to={'/'} leftIcon={<FontAwesomeIcon icon={faPortrait}></FontAwesomeIcon>} primary>
            Hành trình của trang web
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;