import classNames from "classnames/bind";
import styles from './FeatureCard.module.scss'

const cx = classNames.bind(styles)

function FeatureCard({ data, className, white, small }) {
  const props = []
  if (white) {
    props.background = 'white'
  } else {
    props.background = 'green'
  }
  return (
    <div className={cx('wrapper', props.background, className, {
      small
    })}>
      <div className={cx('left')}>
        {data.header}
      </div>
      <p className={cx('right')}>
        {data.message}
      </p>
    </div>
  );
}

export default FeatureCard;