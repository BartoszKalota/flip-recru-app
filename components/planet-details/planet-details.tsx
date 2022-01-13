import { getPreparedTitle } from 'services';
import styles from 'styles/planet-details.module.css';

interface IProps {
  planet: { [key: string]: string | number };
  planetDetailsKeys: string[];
}

export const PlanetDetails = ({ planet, planetDetailsKeys }: IProps) => (
  <div className={styles['details-section']}>
    {planetDetailsKeys.map((planetDetailKey) => (
      <div className={styles['detail-item']} key={planet[planetDetailKey]}>
        <div className={styles['detail-key']}>
          <p className={styles['detail-text']}>
            {`${getPreparedTitle(planetDetailKey)}:`}
          </p>
        </div>
        <div className={styles['detail-value']}>
          <p className={styles['detail-text']}>{planet[planetDetailKey]}</p>
        </div>
      </div>
    ))}
  </div>
);
