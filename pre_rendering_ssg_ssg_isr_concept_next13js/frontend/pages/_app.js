import Layouts from "../components/layouts/layout";

export default function App({ Component, pageProps }) {
  return(
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
         
    )}


