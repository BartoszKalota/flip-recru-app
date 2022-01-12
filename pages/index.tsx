import 'antd/dist/antd.css';

import { Card } from 'components/card';
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
    <>
      <div className={styles.content}>
        {!isLoading && planets?.results ? (
          planets.results.map(({ name }, i) => <Card name={name} key={i} />)
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
