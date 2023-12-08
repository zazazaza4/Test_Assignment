import { FormSection } from './sections/form';
import { HeadSection } from './sections/head';
import { StaffSection } from './sections/staff';

import styles from './styles.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <HeadSection />
      <StaffSection />
      <FormSection />
    </main>
  );
};

export default Main;
