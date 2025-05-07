import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function ChangelogPage() {
  const releases = [
    { version: '2.0.0', date: 'May 5, 2025', path: '/changelog/2.0.0' },
    { version: '1.9.0', date: 'April 10, 2025', path: '/changelog/1.9.0' },
    { version: '1.8.0', date: 'March 15, 2025', path: '/changelog/1.8.0' },
  ];

  return (
    <Layout
      title="Changelog"
      description="Release notes and version history">
      <main className="container margin-vert--lg">
        <h1>Changelog</h1>
        <p>
          This page lists all the updates and changes to our platform.
        </p>

        <div className="margin-bottom--lg">
          {releases.map((release) => (
            <div key={release.version} className="margin-bottom--md">
              <h2>
                <Link to={release.path}>
                  Version {release.version} ({release.date})
                </Link>
              </h2>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default ChangelogPage;
