import Footer from 'components/footer';
import Header from 'components/header';

import styles from 'styles/layout.module.css';

interface IProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: IProps) => (
  <div className={styles.layout}>
    <Header />

    <main className={styles.main}>
      <section className={styles.container}>
        {children}
      </section>
    </main>

    <Footer />
  </div>
);
