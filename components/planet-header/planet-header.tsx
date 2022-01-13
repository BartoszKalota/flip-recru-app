import BackButton from 'components/back-button';
import { useRouter } from 'next/router';
import styles from 'styles/planet-header.module.css';

interface IProps {
  planetName: string;
}

export const PlanetHeader = ({ planetName }: IProps) => {
  const router = useRouter();

  return (
    <div className={styles['card-header-container']}>
      <BackButton onBack={() => router.push('/')} />
      <h2 className={styles['card-header']} data-testid="title">
        {planetName}
      </h2>
    </div>
  );
};
