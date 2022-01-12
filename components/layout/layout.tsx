import { Footer } from 'components/footer';
import { Header } from 'components/header';
import Head from 'next/head';

import styles from 'styles/layout.module.css';

interface IProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: IProps) => (
  <div className={styles.layout}>
    <Head>
      <title>Star Wars Navigation System</title>
      <meta name="description" content="Star Wars Navigation System" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className={styles.main}>
      <section className={styles.container}>
        {children}
      </section>
    </main>

    <Footer />
  </div>
);
