import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    const pageWidth = window.innerWidth;
    
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle"
                   style={{textShadow: '1px 1px 5px #00000040', opacity: 0.9,}}>{siteConfig.tagline}</p>
                <div style={{
                    width: '80%',
                    fontSize: 15,
                    marginTop: 20,
                    fontFamily: 'monospace',
                    fontWeight: 'bold',
                    backgroundColor: 'black',
                    padding: 20,
                    borderRadius: 10,
                    opacity: 0.8,
                    justifySelf: 'center',
                    color: "white",
                }}>
                    <p>
                        Welcome to my personal documentation site! Here, you'll find a collection of insights and
                        solutions based on my experiences as a developer and cyber security enthusiast.
                    </p>
                    <p>
                        This site is designed to help
                        you navigate through common coding errors, device-related issues, and hurdles encountered during
                        pentesting and general tech use.
                    </p>
                    {
                        pageWidth > 1000 &&
                        <p>
                            Whether you're looking for troubleshooting tips, step-by-step
                            how-to guides, or solutions to specific problems, this platform serves as a practical
                            resource
                            to save you time and effort. Dive in to explore real-world scenarios, learn from my
                            experiences,
                            and enhance your skills with actionable advice. Happy problem-solving!
                        </p>
                    }
                </div>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro"
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            gap: "10px",
                            backgroundColor: "white",
                            boxShadow: "#0000001a 1px 1px 5px",
                        }}>
                        Dive In
                        <img
                            src="/img/dive.png"
                            alt="diving image"
                            style={{
                                width: '85px',
                                marginLeft: '10px'
                            }}/>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Documentations for personal projects and OS errors with solutions">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
