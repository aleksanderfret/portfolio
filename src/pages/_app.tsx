import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

import Layout from 'components/Layout';

const Portfolio = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default appWithTranslation(Portfolio);
