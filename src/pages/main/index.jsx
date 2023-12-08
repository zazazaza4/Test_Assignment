import { lazy, Suspense } from 'react';

import { Preloader } from '@/components/preloader';

const FormSection = lazy(() => import('./sections/form'));
const HeadSection = lazy(() => import('./sections/head'));
const StaffSection = lazy(() => import('./sections/staff'));

import styles from './styles.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Suspense fallback={<Preloader className={styles.loader} />}>
        <HeadSection />
        <StaffSection />
        <FormSection />
      </Suspense>
    </main>
  );
};

export default Main;
