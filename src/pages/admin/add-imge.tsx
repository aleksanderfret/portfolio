import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { i18n } from 'config/i18n';
import Title from 'components/title';

export default function AddImage() {
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <Title>AddImage</Title>
      </Head>

      <h1>AddImage</h1>
      <div>{t('cancel')}</div>
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
