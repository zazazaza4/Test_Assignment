import { Button } from '@/components/button';
import { Logo } from '@/components/logo';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Logo />
        <div className={styles.headerButtons}>
          <Button>User</Button>
          <Button>Sing up</Button>
        </div>
      </div>
    </header>
  );
};
export { Header };
