import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {usePluginData} from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

function ChangelogList() {
  // Get data from the plugin
  const {releases} = usePluginData('docusaurus-changelog-plugin');
  
  // Sort releases by date (newest first)
  const sortedReleases = [...releases].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <Layout
      title="Changelog"
      description="A list of all releases and updates to our platform">
      <main className="container margin-vert--lg">
        <h1>Changelog</h1>
        <p className="margin-bottom--md">
          This page contains a list of all releases and updates to our platform.
        </p>

        <div className={styles.changelogList}>
          {sortedReleases.map((release) => (
            <div key={release.id} className={styles.changelogItem}>
              <h2 className={styles.changelogItemTitle}>
                <Link to={release.permalink}>
                  {release.title}
                </Link>
              </h2>
              {release.date && (
                <p className={styles.changelogItemDate}>
                  {new Date(release.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              )}
              {release.description && (
                <p className={styles.changelogItemDescription}>
                  {release.description}
                </p>
              )}
              <Link
                className="button button--secondary button--sm"
                to={release.permalink}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default ChangelogList;
