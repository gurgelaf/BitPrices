import Layout from "../comps/layout";
import Prices from "../comps/prices";
import Fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h1>Welcome to BitPrices</h1>
    <h1>Price</h1>

    <Prices bpi={props.bpi} />
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi
  };
};

export default Index;