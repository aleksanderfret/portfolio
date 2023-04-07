import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import { i18n } from 'config/i18n';
import Title from 'components/title';

export default function Home() {
  return (
    <div>
      <Head>
        <Title>Home</Title>
      </Head>

      <h1>Home</h1>
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

