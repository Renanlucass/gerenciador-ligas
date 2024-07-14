// pages/_app.js
import '@/styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
