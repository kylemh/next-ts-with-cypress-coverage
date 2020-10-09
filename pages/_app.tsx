import { NextComponentType } from 'next';
import '../styles/globals.css';

interface CustomAppProps {
  Component: NextComponentType;
  pageProps: { [key: string]: any };
}

function App({ Component, pageProps }: CustomAppProps) {
  return <Component {...pageProps} />;
}

export default App;
