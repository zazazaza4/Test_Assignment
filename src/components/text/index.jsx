import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Text = ({ className, children, isBlackText }) => {
  const classBlack = isBlackText ? styles.textBlack : '';
  return (
    <p className={`${styles.text} ${classBlack} ${className}`}>{children}</p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isBlackText: PropTypes.bool,
};

Text.defaultProps = {
  className: '',
  isBlackText: false,
};

export { Text };
