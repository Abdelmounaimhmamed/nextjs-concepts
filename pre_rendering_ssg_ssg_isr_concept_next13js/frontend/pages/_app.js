import Head from "next/head";
import Layouts from "../components/layouts/layout";

export default function App({ Component, pageProps }) {
  return(
    <Layouts>
      <Head>
        <title>next events</title>
        <meta name="description" content="data" />
        <meta name="viewport" content="initil-scale=1.0,width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layouts>
         
    )}


