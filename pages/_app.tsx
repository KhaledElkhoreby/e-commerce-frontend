import type { AppProps } from 'next/app';
import { wrapper } from '../lib/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}

export default wrapper.withRedux(MyApp);
