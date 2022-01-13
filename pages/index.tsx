import 'antd/dist/antd.css';

import { Card } from 'components/card';
import Head from 'components/head';
import { Loader } from 'components/loader';
import { Pagination } from 'components/pagination';
import { IPlanetsList } from 'interfaces/iplanets-list';
import { useEffect, useState } from 'react';
import { getIdFromUrl, getPlanetsList } from 'services';
import styles from 'styles/home.module.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState<IPlanetsList | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getPlanetsList(currentPage, setIsLoading, setPlanets);
  }, [currentPage]);

  return (
    <>
      <Head />

      <div className={styles.content}>
        {!isLoading && planets?.results ? (
          planets.results.map(({ name, url }, i) => (
            <Card
              key={i}
              name={name}
              planetId={getIdFromUrl(url)}
              onClick={() => setIsLoading(true)}
            />
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
    </>
  );
};

export default Home;
