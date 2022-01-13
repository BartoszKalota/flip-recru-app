import Head from 'components/head';
import PlanetDetails from 'components/planet-details';
import PlanetHeader from 'components/planet-header';
import { API } from 'constants/api';
import { IPlanet } from 'interfaces/iplanet';
import { IPlanetsList } from 'interfaces/iplanets-list';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getIdFromUrl } from 'services';
import styles from 'styles/planet-page.module.css';

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

export const PlanetPage = ({ planet }: IProps) => (
  <>
    <Head planetName={planet?.name} />

    <div className={styles.card}>
      <PlanetHeader planetName={planet?.name} />
      <PlanetDetails
        planet={planet as unknown as { [key: string]: string | number }}
      />
    </div>
  </>
);

export default PlanetPage;
