import '../styles/globals.css'
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}

// burası root component giriş yerimiz index dosyası olsa da main navigation'ın
// her yerde görünmesi için Layout ile burayı wraplemeliyiz.

export default MyApp
