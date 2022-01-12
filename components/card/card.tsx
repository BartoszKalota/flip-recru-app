import Link from 'next/link';
import styles from 'styles/card.module.css';

interface IProps {
  name: string;
  planetId: string;
  onClick: () => void;
}

export const Card = ({ name, planetId, onClick }: IProps) => (
  <Link href={`/planet/${planetId}`}>
    <div className={styles.card} onClick={onClick}>
      <p className={styles['card-title']}>{name}</p>
    </div>
  </Link>
);
