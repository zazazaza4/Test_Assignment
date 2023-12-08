import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Heading = ({ children, className }) => {
  return <h1 className={`${styles.heading} ${className}`}>{children}</h1>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Heading.defaultProps = {
  className: '',
};

export { Heading };
