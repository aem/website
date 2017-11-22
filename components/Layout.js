import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Link from 'next/link';
import Wrapper from './Wrapper';

const description =
  'Adam is a Boston-based software developer, photographer, and cyclist.';

const Layout = ({ children, title = 'Adam Markon' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="google-site-verification"
          content="_D_UusvbMFmpydhJYUZ9Qr7Mi1WJkeiieGGO3Lk0IJA"
        />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/static/headshot.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Catamaran|Oxygen+Mono"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="icon" href="/static/am_64x64.png" />
        {process.env == 'production' && (
          <script
            type="text/javascript"
            id="hs-script-loader"
            async
            defer
            src="//js.hs-scripts.com/1932554.js"
          />
        )}
      </Head>
      <Wrapper>
        <Header />
        {children}
        <footer />
      </Wrapper>
    </div>
  );
};

export default Layout;
