import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Practical Guides',
        Svg: require('@site/static/img/instruction-manual-cuate.svg').default,
        description: (
            <>
                A collection of step-by-step guides covering various subjects and tools. These explain how I comprehend, set up, and operate them.
            </>
        ),
    },
    {
        title: 'Effortless Solutions',
        Svg: require('@site/static/img/stress-pana.svg').default,
        description: (
            <>
                Minimize the frustration of hunting for solutions on the web. The resources I’ve gathered here have been incredibly helpful to me.
                There’s no need to browse extensively for resolutions to challenges you encounter; chances are, you'll discover them within this site.
            </>
        ),
    },
    {
        title: 'Enjoy Coding',
        Svg: require('@site/static/img/hand-coding-pana.svg').default,
        description: (
            <>
                Take pleasure in coding and maintain a positive attitude while doing it.
            </>
        ),
    }
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
