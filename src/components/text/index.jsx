import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Text = ({ className, children, isBlackText, title }) => {
  const classBlack = isBlackText ? styles.textBlack : '';
  const classPoiner = title ? styles.isPointer : '';
  return (
    <p className={`${styles.text} ${classBlack} ${classPoiner} ${className}`}>
      {title && <span className={styles.title}>{title}</span>}
      {children}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isBlackText: PropTypes.bool,
  title: PropTypes.string,
};

Text.defaultProps = {
  className: '',
  isBlackText: false,
  title: '',
};

export { Text };
