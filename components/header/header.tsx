import styles from 'styles/header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.title} data-testid="title">
      Star Wars Navigation System
    </h1>
  </header>
);
