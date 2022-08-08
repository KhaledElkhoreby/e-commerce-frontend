import type { AppProps } from 'next/app';
import Footer from '../components/Layout/Footer';
import Navbar from '../components/Layout/Navbar';
import { wrapper } from '../lib/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="container pt-24 pb-8">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default wrapper.withRedux(MyApp);
