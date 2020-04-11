import Navbar from "./navbar";
import Head from "next/head";
import Css from "./css";

const Layout = ({ children }) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>BitPrices</title>
    </Head>

    <Navbar />

    {children}

    <Css />
  </div>
);

export default Layout;