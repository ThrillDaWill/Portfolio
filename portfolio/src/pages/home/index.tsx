import React from 'react';
import '../../app/App.scss';
import Head from 'next/head';
import LeftPanel from '@/components/LeftPanel/LeftPanel';

export default function Home() {
  return (
    <>
      <Head>
        <title>William Byrd - Home</title>
      </Head>
      <main className='app'>
        <LeftPanel />
      </main>
    </>
  )
}