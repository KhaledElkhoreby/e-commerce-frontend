import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta name="description" content="Vastra" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container pt-24 pb-8">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
