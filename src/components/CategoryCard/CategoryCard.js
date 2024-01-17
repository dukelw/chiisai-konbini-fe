import classNames from 'classnames/bind';
import styles from './CategoryCard.module.scss';

const cx = classNames.bind(styles);

function CategoryCard({ data, className }) {
  return (
    <div className={cx('wrapper', className)}>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <img className={cx('image')} src={data.image} alt="Ảnh danh mục" />
        </div>
        <div className={cx('name')}>{data.name}</div>
      </div>
    </div>
  );
}

export default CategoryCard;
