import 'antd/dist/antd.css';

import { API } from 'constants/api';
import { IProps } from 'interfaces/iplanets-list';
import type { GetStaticProps } from 'next';
import styles from 'styles/home.module.css';

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const res = await fetch(`${API}/planets`);
  const data = await res.json();
  return {
    props: { planets: data },
  };
};

const Home: React.FC<IProps> = ({ planets }) => {
  console.log(planets);
  return (
    <main className={styles.main}>
      <p>test</p>
    </main>
  );
};

export default Home;
