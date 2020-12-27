import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row">
            <div className="column">
              <h4>Mark Makuno Gachoka</h4>
            </div>
            <div class="column column-50 column-offset-25">
              <div className="row">
                <Link to="/projects/" className="column column-offset-75">
                  Projects
                </Link>
                <Link to="/contact/" className="column">
                  Contact
                </Link>
              </div>
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
