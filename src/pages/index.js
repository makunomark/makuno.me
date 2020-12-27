import React from "react";
import { Link } from "gatsby";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <ReactFullpage
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      loopTop
      loopBottom
      sectionsColor={["#ff5f45", "#0798ec"]}
      anchors={["home", "experience"]}
      navigationTooltips={["Home", "Experience"]}
      navigation
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Layout>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <h6>Mark Makuno Gachoka</h6>
                  <p>
                    Hi there! My name is Mark Makuno Gachoka. I am a full-stack
                    developer. I have worked with android, web and iOS as
                    frontend clients
                  </p>
                </div>
              </Layout>
            </div>
            <div className="section">
              <Layout>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                  }}
                >
                  <h6>Experience</h6>
                  <p>
                    I currently work at Twiga Foods as an Software Engineer. My
                    focus is on android development. However, I find myself
                    touching other parts of the stack.
                  </p>
                </div>
              </Layout>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />

    // <>
    //   <nav>
    //     <div
    //       className="container"
    //       style={{ display: "flex", alignItems: "center" }}
    //     >
    //       <div className="row">
    //         <div className="column">
    //           <h6>Mark Makuno Gachoka</h6>
    //         </div>
    //         <div
    //           className="column"
    //           style={{ display: "flex", justifyContent: "flex-end" }}
    //         >
    //           <Link to="/projects/" style={{ marginRight: 12 }}>
    //             Projects
    //           </Link>
    //           <Link to="/contact/">Contact</Link>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    //   <Layout>
    //     <blockquote>
    //       <p>
    //         <em>Yeah!! Milligram is amazing.</em>
    //       </p>
    //     </blockquote>
    //   </Layout>
    // </>
  );
};

export default IndexPage;
