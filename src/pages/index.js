import * as React from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Home</h1>
      <h2>Spaghetti is life</h2>
      <p>Main page of spaghetti</p>
    </Layout>
  );
};

export default IndexPage;
