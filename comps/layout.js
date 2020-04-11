import Navbar from "./navbar";
import Head from "next/head";
import "../sass/layout.scss"
const Layout = ({ children }) => (
  <div className="layout">
    <Head>
      <meta charSet="utf-8" />
      <title>BitPrices</title>
    </Head>

    <Navbar />

    {children}
  </div>
);

export default Layout;