import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'components/Layout';

const Portfolio = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta charSet="UTF-8" />
      <meta content="Aleksander Fret" name="author" />
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta content="ie=edge" http-equiv="X-UA-Compatible" />
      <meta content="Portfolio" name="description" />
      <title>Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(Portfolio);
