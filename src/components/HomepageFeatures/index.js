import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const SectionList = [
  {
    title: 'Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Find comprehensive guides and documentation to help you get started with our eCommerce platform.
      </>
    ),
    link: '/docs/',
    linkText: 'Read Documentation',
  },
  {
    title: 'Blog',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Stay updated with the latest news, tips, and best practices for using our eCommerce platform.
      </>
    ),
    link: '/blog/',
    linkText: 'Visit Our Blog',
  },
  {
    title: 'Changelog',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Keep track of all updates, changes, and improvements made to our eCommerce platform.
      </>
    ),
    link: '/changelog/',
    linkText: 'View Changelog',
  },
];

function Section({Svg, title, description, link, linkText}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to={link}>
            {linkText}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {SectionList.map((props, idx) => (
            <Section key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
