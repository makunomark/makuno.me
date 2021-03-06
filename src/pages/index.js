import React from "react";
import { Helmet } from "react-helmet";

import Layout from "../components/layout";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mark Gachoka | Home</title>
      </Helmet>
      <Landing />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
