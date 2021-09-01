import { Provider } from 'next-auth/client';
import { useRouter } from 'next/router';

import Layout from '../components/layout/layout';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const urlPath = router.pathname;
  console.log(urlPath);

  if(urlPath === '/auth') {
    return(
      <Component {...pageProps} />
    )
  }


  return(
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );

}

export default MyApp
