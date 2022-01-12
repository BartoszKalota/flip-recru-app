import { Head } from 'components/head';
import { PlanetHeader } from 'components/planet-header';
import { API } from 'constants/api';
import { IPlanet } from 'interfaces/iplanet';
import { IPlanetsList } from 'interfaces/iplanets-list';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getIdFromUrl, getPreparedTitle } from 'services';
import styles from 'styles/planet.module.css';

interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API}/planets/`);
  const data: IPlanetsList = await res.json();
  const paths = data?.results?.map((planet) => ({
    params: { id: getIdFromUrl(planet?.url) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const res = await fetch(`${API}/planets/${id}/`);
  const data: IPlanet = await res.json();
  return {
    props: { planet: data },
  };
};

interface IProps {
  planet: IPlanet;
}

const PlanetPage = ({ planet }: IProps) => {
  const planetCopy = { ...planet } as unknown as {
    [key: string]: string | number;
  };

  const planetDetailsKeys = [
    'climate',
    'diameter',
    'gravity',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain',
  ];

  return (
    <>
      <Head planetName={planet?.name} />

      <div className={styles.card}>
        <PlanetHeader planetName={planet?.name} />

        <div className={styles['details-section']}>
          {planetDetailsKeys.map((planetDetailKey) => (
            <div className={styles['detail-item']}>
              <div className={styles['detail-key']}>
                <p className={styles['detail-text']}>
                  {`${getPreparedTitle(planetDetailKey)}:`}
                </p>
              </div>
              <div className={styles['detail-value']}>
                <p className={styles['detail-text']}>
                  {planetCopy[planetDetailKey]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PlanetPage;
