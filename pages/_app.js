import Layout from "../Layouts/Layout";
import "../styles/globals.css";
import "../styles/mainSectionBanner.css";
import "../styles/header.css";
import "../styles/navbar.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
