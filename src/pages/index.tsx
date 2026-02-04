import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Read the Documentation 📘
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Automotive Safety IDE for C and Rust">
      <HomepageHeader />
      <main>
        <div style={{textAlign: 'center', padding: '50px'}}>
            <h2>Welcome to the Future of Automotive Dev</h2>
            <p>TrinovaQ Studio bridges the gap between MISRA-C compliance and Rust memory safety.</p>
            <img src="https://github.com/raef-ben-jeddou/trinodev-studio/raw/main/src/icon.png" alt="TrinovaQ Logo" style={{maxWidth: '200px'}}/>
        </div>
      </main>
    </Layout>
  );
}