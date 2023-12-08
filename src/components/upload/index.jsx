import { useState } from 'react';
import PropTypes from 'prop-types';

import { truncate } from '@/helpers/truncate';

import styles from './styles.module.scss';

const Upload = ({ name, register, className, error }) => {
  const [fileName, setFileName] = useState('Upload your photo');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  const classError = error ? styles.error : '';
  return (
    <div className={`${styles.upload} ${classError} ${className}`}>
      <div className={styles.uploadWrapper} data-text={truncate(fileName, 20)}>
        <input
          name={name}
          type="file"
          {...register(name)}
          onChange={handleFileChange}
        />
      </div>
      {error && <span className={styles.uploadError}>{error.message}</span>}
    </div>
  );
};

Upload.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  className: PropTypes.string,
  error: PropTypes.object,
};

Upload.defaultProps = {
  className: '',
  error: null,
};

export { Upload };
