import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import { i18n } from 'config/i18n';
import Title from 'components/title';

export default function GreetingCard() {
  return (
    <div>
      <Head>
        <Title>Handicraft</Title>
      </Head>

      <h1>Handicraft</h1>
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
