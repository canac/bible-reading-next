import type { AppProps } from 'next/app';
import Head from 'next/head';
import { withUrqlClient } from 'next-urql';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bible Reading</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default withUrqlClient(
  () => ({
    url: 'http://localhost:8081/v1/graphql',
  }),
  { ssr: true },
)(MyApp);
