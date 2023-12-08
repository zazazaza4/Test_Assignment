import logo from '@/assets/images/logo.svg';

import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img width={104} height={26} src={logo} alt="logo" />
    </div>
  );
};

export { Logo };
