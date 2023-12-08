import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const Input = ({ label, register, name, error, className }) => {
  const classError = error ? styles.error : '';
  return (
    <div className={`${styles.inputGroup} ${classError} ${className}`}>
      <label className={styles.inputUnderlined}>
        <input {...register(name)} placeholder={'&nbsp;'} />
        <span className={styles.inputLabel}>{label}</span>
        {error && <span className={styles.inputError}>{error.message}</span>}
      </label>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
  className: PropTypes.string,
};

Input.defaultProps = {
  error: null,
  className: '',
};

export { Input };
