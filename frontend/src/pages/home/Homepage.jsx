import React from "react";
import Layout from "../../components/Layout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
function Homepage() {
  return (
    <Layout>
      <Hero />
      <Articles />
      <CTA />
    </Layout>
  );
}

export default Homepage;
