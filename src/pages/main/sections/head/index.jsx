import { Button } from '@/components/button';
import { Heading } from '@/components/heading';
import { Text } from '@/components/text';

import styles from './styles.module.scss';

const HeadSection = () => {
  return (
    <section className={`${styles.welcome} container`}>
      <div className={styles.welcomeContent}>
        <div className={styles.welcomeText}>
          <Heading>Test assignment for front-end developer</Heading>
          <Text>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they&apos;ll be building web interfaces with
            accessibility in mind. They should also be excited to learn, as the
            world of Front-End Development keeps evolving.
          </Text>
        </div>
        <Button>Sign up</Button>
      </div>
    </section>
  );
};

export default HeadSection;
