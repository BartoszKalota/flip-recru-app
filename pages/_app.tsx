import '../styles/globals.css';

import { AppLayout } from 'components/layout';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}

export default App;
