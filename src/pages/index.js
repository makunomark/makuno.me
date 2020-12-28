import React from "react";
import Typing from "react-typing-animation";
import ReactFullpage from "@fullpage/react-fullpage"; // will return static version on server and "live" version on client

import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <ReactFullpage
      //fullpage options
      // licenseKey={"YOUR_KEY_HERE"}
      loopTop
      loopBottom
      sectionsColor={["#35495e", "#0798ec"]}
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
                    fontFamily: "Gochi Hand, cursive",
                    fontSize: 32,
                    textAlign: "center",
                  }}
                >
                  <Typing>
                    Hi there, I am Mark Makuno Gachoka
                    <br />
                    <br />
                    <Typing.Delay ms={400} />
                    I am a full-stack Software Developer.
                    <Typing.Delay ms={300} /> My focus has been on Native
                    Android using Kotlin. <Typing.Delay ms={300} />
                    Sometimes, I use{" "}
                    <a href="https://reactnative.dev/">React Native</a> to build
                    cross platform applications on both Android and iOS.{" "}
                    <Typing.Delay ms={300} />
                    <br />
                    <br /> On Web, I have tried <a>Vue</a>, but I am more
                    experienced using <a>React</a>.
                    <Typing.Delay ms={300} />
                    <br />
                    <br /> I use <a>Node</a> to write server side applications.
                    Recently, I have been trying to use Kotlin.
                    <Typing.Delay ms={200} /> For some typed goodness. 😜
                  </Typing>
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
                    fontFamily: "Gochi Hand, cursive",
                    fontSize: 32,
                    textAlign: "center",
                  }}
                >
                  <Typing>
                    I currently work at{" "}
                    <a href="https://twiga.ke">Twiga Foods</a> as a Software
                    Engineer.
                    <br /> <br /> Here, I focus Android to support the
                    commercial &amp; fulfillment department to collect orders
                    and fulfill deliveries of quality &amp; affordable food.
                    <br />
                    <br />I enjoy touching other parts of the stack. Recently, I
                    have been writing cloud functions to deliver reports to our
                    users through the app.
                  </Typing>
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
