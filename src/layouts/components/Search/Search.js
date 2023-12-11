import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx('navigation_search')}>
      <label htmlFor="" className={cx('navigation_search-field')}>
        <input placeholder="Find product..." type="text" className={cx('navigation_search-input')} />
        <Link className={cx('navigation_search-icon')}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('fz-16', 'primary-icon-no-hover')}></FontAwesomeIcon>
        </Link>
      </label>
    </div>
  );
}

export default Search;
