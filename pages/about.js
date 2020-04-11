import Layout from "../comps/layout";
import Link from "next/link";

const About = () => (
  <Layout>
    <div>
      <h1>About</h1>
      <p>
        BitPrice is a service that shows the rate of bitcoin in some coins.{" "}
        <Link href="/">
          <a>Click here</a>
        </Link>{" "}
        to start!!
      </p>
    </div>
  </Layout>
);

export default About;