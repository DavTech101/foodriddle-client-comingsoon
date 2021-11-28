import Layout from './../components/Layout';
import GlobalStyles from './../components/GlobalStyles';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
