import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import GoogleTagManager from '../GoogleTagManager';

export default function Layout(props) {
  return (
    <>
      <GoogleTagManager gtmId="GTM-PCD6375F" />
      <OriginalLayout {...props} />
    </>
  );
}
