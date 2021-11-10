import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Journey from '../../components/Journey';
import styles from '../../styles/Index.module.css';

const Index: NextPage = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string, 10);

  return (
    <div className={styles.app}>
      <Journey id={id} />
    </div>
  );
};

export default Index;
