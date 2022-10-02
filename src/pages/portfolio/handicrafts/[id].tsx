import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticPaths, GetStaticProps } from 'next';

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

interface Params extends ParsedUrlQuery {
  id: string;
}

interface HandicraftProps {
  id?: string;
}

export const getStaticProps: GetStaticProps<HandicraftProps, Params> = async ({
  params,
  locale,
}) => {
  const { id } = params || {};

  return {
    props: {
      id,
      ...(await serverSideTranslations(locale || i18n.defaultLocale)),
    },
    notFound: false,
    revalidate: 60,
    // redirect: {
    //   destination: '/',
    // },
  };
};

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false, // 'blocking'S
  };
};
