import styles from 'styles/footer.module.css';

export const Footer = () => (
  <footer className={styles.footer}>
    <small className={styles['footer-text']} data-testid="small">
      Copyright 2022
    </small>
  </footer>
);
