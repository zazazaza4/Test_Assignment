import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Button = ({
  type,
  onClick,
  className,
  children,
  isDisabled,
  width,
  height,
}) => {
  const buttonStyle = {
    width,
    height,
  };

  return (
    <button
      disabled={isDisabled}
      type={type || 'button'}
      onClick={onClick}
      className={`${styles.button}  ${className}`}
      style={buttonStyle}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
  isDisabled: false,
  width: '100px',
  height: '34px',
};

export { Button };
