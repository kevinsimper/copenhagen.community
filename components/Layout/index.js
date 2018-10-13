import React from 'react';
import Head from 'next/head';

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Copenhagen.Community</title>
    </Head>
    <div>{children}</div>
  </div>
);
