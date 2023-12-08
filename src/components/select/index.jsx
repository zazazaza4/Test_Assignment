import PropTypes from 'prop-types';

import { Text } from '@/components/text';

import styles from './styles.module.scss';

const Select = ({ title, name, options, error, register, defaultValue }) => {
  const classError = error ? styles.error : '';
  return (
    <div className={`${styles.select} ${classError}`}>
      <Text isBlackText className={styles.selectTitle}>
        {title}
      </Text>
      <div className={styles.selectContainer}>
        {options.map((option, index) => (
          <div className={styles.radio} key={option.id}>
            <input
              type="radio"
              name={name}
              id={option.id}
              value={option.id}
              {...register(name)}
              defaultChecked={index === 0 && defaultValue === undefined}
            />
            <label htmlFor={option.id} className={styles.radioLabel}>
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

Select.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  defaultValue: PropTypes.number,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export { Select };
