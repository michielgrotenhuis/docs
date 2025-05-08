import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const SectionList = [
  {
    title: '<translate>Documentation</translate>',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <translate>Find comprehensive guides and documentation to help you get started with our eCommerce platform.</translate>
      </>
    ),
    link: '/docs/',
    linkText: '<translate>Read Documentation</translate>',
  },
  {
    title: '<translate>Blog</translate>',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <translate>Stay updated with the latest news, tips, and best practices for using our eCommerce platform.</translate>
      </>
    ),
    link: '/blog/',
    linkText: '<translate>Visit Our Blog</translate>',
  },
  {
    title: '<translate>Changelog</translate>',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <translate>Keep track of all updates, changes, and improvements made to our eCommerce platform.</translate>
      </>
    ),
    link: '/changelog/',
    linkText: '<translate>View Changelog</translate>',
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
