import 'antd/dist/antd.css';

import { Loader } from 'components/loader';
import { Pagination } from 'components/pagination';
import { API } from 'constants/api';
import { IPlanetsList } from 'interfaces/iplanets-list';
import { useEffect, useState } from 'react';
import styles from 'styles/home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState<IPlanetsList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const getPlanetsList = async () => {
    setIsLoading(true);
    const res = await fetch(`${API}/planets/?page=${currentPage}`);
    const data: IPlanetsList = await res.json();
    setPlanets(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getPlanetsList();
  }, [currentPage]);

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <div className={styles.content}>
          {!isLoading && planets?.results ? (
            planets.results.map(({ name }, i) => (
              <div className={styles.card} key={i}>
                <p className={styles['card-title']}>{name}</p>
              </div>
            ))
          ) : (
            <Loader />
          )}
        </div>

        {!isLoading && (
          <Pagination
            isPrevPageAvailable={!!planets?.previous}
            isNextPageAvailable={!!planets?.next}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    </main>
  );
};

export default Home;
