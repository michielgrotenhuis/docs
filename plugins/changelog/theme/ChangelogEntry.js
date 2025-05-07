import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {useTitleFormatter} from '@docusaurus/theme-common';
import styles from './styles.module.css';

function ChangelogEntry(props) {
  const {content, metadata} = props;
  const {title, date, description, version} = metadata;
  const formattedTitle = useTitleFormatter(title);

  return (
    <Layout title={formattedTitle} description={description}>
      <main className="container margin-vert--lg">
        <div className={styles.changelogEntry}>
          <header>
            <h1>{title}</h1>
            {date && (
              <div className={styles.changelogEntryDate}>
                Released on {date}
              </div>
            )}
          </header>
          
          <div className="markdown">
            <div dangerouslySetInnerHTML={{__html: content}} />
          </div>
          
          <div className={styles.changelogEntryNavigation}>
            <div className="row margin-top--lg">
              <div className="col col--6">
                {metadata.prevRelease && (
                  <Link
                    className="button button--secondary button--block"
                    to={metadata.prevRelease.permalink}>
                    ← {metadata.prevRelease.title}
                  </Link>
                )}
              </div>
              <div className="col col--6 text--right">
                {metadata.nextRelease && (
                  <Link
                    className="button button--secondary button--block"
                    to={metadata.nextRelease.permalink}>
                    {metadata.nextRelease.title} →
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default ChangelogEntry;
