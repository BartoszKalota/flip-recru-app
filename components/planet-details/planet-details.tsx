import { PLANET_DETAIL_KEYS } from 'constants/planet-detail-keys';
import { getPreparedTitle } from 'services';
import styles from 'styles/planet-details.module.css';

interface IProps {
  planet: { [key: string]: string | number };
}

export const PlanetDetails = ({ planet }: IProps) => (
  <div className={styles['details-section']}>
    {PLANET_DETAIL_KEYS.map((planetDetailKey) => (
      <div
        className={styles['detail-item']}
        key={planet[planetDetailKey]}
        data-testid="detail-item">
        <div className={styles['detail-key']}>
          <p className={styles['detail-text']} data-testid="detail-key-text">
            {`${getPreparedTitle(planetDetailKey)}:`}
          </p>
        </div>
        <div className={styles['detail-value']}>
          <p className={styles['detail-text']} data-testid="detail-value-text">
            {planet[planetDetailKey]}
          </p>
        </div>
      </div>
    ))}
  </div>
);
