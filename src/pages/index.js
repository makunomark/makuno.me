import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <nav>
        <div
          className="container"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="row">
            <div className="column">
              <h6>Mark Makuno Gachoka</h6>
            </div>
            <div
              className="column"
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link to="/projects/" style={{ marginRight: 12 }}>
                Projects
              </Link>
              <Link to="/contact/">Contact</Link>
            </div>
          </div>
        </div>
      </nav>
      <Layout>
        <blockquote>
          <p>
            <em>Yeah!! Milligram is amazing.</em>
          </p>
        </blockquote>
      </Layout>
    </>
  );
};

export default IndexPage;
