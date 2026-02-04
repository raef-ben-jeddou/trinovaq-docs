import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
            📘 Read the Documentation
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
      title={`Welcome to ${siteConfig.title}`}
      description="Automotive Safety IDE for C and Rust">
      <HomepageHeader />
      <main>
        <div style={{textAlign: 'center', padding: '4rem 2rem'}}>
            <h2>The Future of Automotive Safety</h2>
            <p style={{fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto'}}>
              TrinovaQ Studio bridges the gap between MISRA-C compliance and Rust memory safety, 
              providing a unified environment for embedded developers.
            </p>
            <div style={{marginTop: '2rem'}}>
                <img 
                  src="https://github.com/raef-ben-jeddou/trinodev-studio/raw/main/src/icon.png" 
                  alt="TrinovaQ Logo" 
                  style={{maxWidth: '150px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)'}}
                />
            </div>
        </div>
      </main>
    </Layout>
  );
}