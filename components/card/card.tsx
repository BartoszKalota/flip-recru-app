import Link from 'next/link';
import styles from 'styles/card.module.css';

interface IProps {
  name: string;
  planetId: string;
}

export const Card = ({ name, planetId }: IProps) => (
  <Link href={`/planet/${planetId}`}>
    <div className={styles.card}>
      <p className={styles['card-title']}>{name}</p>
    </div>
  </Link>
);
