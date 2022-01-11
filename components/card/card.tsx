import styles from 'styles/card.module.css';

interface IProps {
  name: string;
}

export const Card = ({ name }: IProps) => (
  <div className={styles.card}>
    <p className={styles['card-title']}>{name}</p>
  </div>
);
