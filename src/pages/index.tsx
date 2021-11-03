import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import { Context, createClient } from 'urql';
import Journey from '../components/Journey';
import styles from '../styles/Index.module.css';

const client = createClient({
  url: 'http://localhost:8081/v1/graphql',
});

const Index: NextPage = () => {
  return (
    <Context.Provider value={client}>
      <div className={styles.app}>
        <Head>
          <title>Bible Reading</title>
        </Head>
        <Journey />
      </div>
    </Context.Provider>
  );
};

export default Index;
