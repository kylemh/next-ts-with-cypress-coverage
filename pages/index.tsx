import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Cypress</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} data-testid="landing_page">
        <h1 className={styles.title}>
          Welcome to the TypeScript <a href="https://nextjs.org">Next.js</a>{' '}
          Cypress example.
        </h1>

        <div className={styles.linkContainer}>
          <Link data-testid="about_page_link" href="/about">
            Try going to about page...
          </Link>
          <>(you can't lol, idk)</>
        </div>
      </main>
    </div>
  );
}
