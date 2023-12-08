import { memo } from 'react';
import PropTypes from 'prop-types';

import defaultPhoto from '@/assets/images/default-photo.svg';
import { Text } from '@/components/text';
import { truncate } from '@/helpers/truncate';

import styles from './styles.module.scss';

const Card = memo(({ name, position, email, phone, photo }) => {
  return (
    <article className={styles.cart}>
      <div className={styles.cartContent}>
        <div className={styles.cartImage}>
          <img src={photo || defaultPhoto} alt={name} />
        </div>
        <Text isBlackText>{truncate(name)}</Text>
        <div className={styles.cartInfo}>
          <Text isBlackText>{truncate(position)}</Text>
          <Text isBlackText>{truncate(email)}</Text>
          <Text isBlackText>{truncate(phone, 14)}</Text>
        </div>
      </div>
    </article>
  );
});

Card.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string,
};

export { Card };
