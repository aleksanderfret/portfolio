import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { i18n } from 'config/i18n';
import Title from 'components/title';
import Footer from 'components/Footer';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <Title>Home</Title>
      </Head>

      <main>
        <h1>Home</h1>
        <div>{t('cancel')}</div>
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || i18n.defaultLocale)),
    },
  };
};
