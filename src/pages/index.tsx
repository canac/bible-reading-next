import type { NextPage } from 'next';
import Head from 'next/head';
import { withUrqlClient } from 'next-urql';
import React from 'react';
import Journey from '../components/Journey';
import styles from '../styles/Index.module.css';

const Index: NextPage = () => {
  return (
    <div className={styles.app}>
      <Head>
        <title>Bible Reading</title>
      </Head>
      <Journey />
    </div>
  );
};

export default withUrqlClient(
  () => ({
    url: 'http://localhost:8081/v1/graphql',
  }),
  { ssr: true },
)(Index);
