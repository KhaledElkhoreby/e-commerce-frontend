import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import muiTheme from '../config/muiTheme';
import { wrapper } from '../lib/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiTheme}>
        {/* @ts-ignore  */}
        <Layout Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default wrapper.withRedux(MyApp);
