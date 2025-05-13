import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import GoogleTagManager from '@site/src/theme/GoogleTagManager';

export default function Layout(props) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-XXXXXX" />
      <OriginalLayout {...props} />
    </>
  );
}
