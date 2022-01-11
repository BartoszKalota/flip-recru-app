import 'antd/dist/antd.css';

import { Loader } from 'components/loader';
import { API } from 'constants/api';
import { IPlanetsList, IProps } from 'interfaces/iplanets-list';
import type { GetStaticProps } from 'next';
import styles from 'styles/home.module.css';

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const res = await fetch(`${API}/planets`);
  const data: IPlanetsList = await res.json();
  return {
    props: { planets: data },
  };
};

const Home: React.FC<IProps> = ({ planets }) => {
  console.log(planets);
  return (
    <main className={styles.main}>
      <section className={styles.content}>
        {planets?.results ? (
          planets.results.map(({ name }, i) => (
            <div className={styles.card} key={i}>
              <p className={styles['card-title']}>{`${i + 1}. ${name}`}</p>
            </div>
          ))
        ) : (
          <Loader />
        )}
      </section>
    </main>
  );
};

export default Home;
