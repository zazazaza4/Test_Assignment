import { useState } from 'react';

import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { ConditionalRender } from '@/components/conditional-render';
import { Heading } from '@/components/heading';
import { useUsers } from '@/hooks/useUsers';

import styles from './styles.module.scss';

const StaffSection = () => {
  const [page, setPage] = useState(1);

  const { users, isLoading, refetch } = useUsers({ page, count: 6 });

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
    refetch();
  };

  return (
    <section className={`${styles.staff} container`}>
      <Heading className={styles.staffTitle}>Working with GET request</Heading>
      <ConditionalRender isLoading={isLoading}>
        <div className={styles.staffCards}>
          {users.map((user) => (
            <Card key={user.id} {...user} />
          ))}
        </div>
      </ConditionalRender>
      <div className={styles.staffButton}>
        <Button width="120px" isDisabled={isLoading} onClick={handleNextPage}>
          Show more
        </Button>
      </div>
    </section>
  );
};

export { StaffSection };
