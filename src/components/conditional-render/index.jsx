import { memo, useMemo } from 'react';

import { Preloader } from '@/components/preloader';

import styles from './styles.module.scss';

const ConditionalRender = memo(({ isLoading, isError, children }) => {
  const memoizedChildren = useMemo(() => children, [children]);

  if (isLoading) {
    return <Preloader className={styles.loader} />;
  }

  if (isError) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.errorText}>Something went wrong</p>
      </div>
    );
  }

  return memoizedChildren;
});

export { ConditionalRender };
