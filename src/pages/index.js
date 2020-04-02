import React from "react";

import SEO from "../components/seo";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Tracks from "../components/sections/Tracks";
import Footer from "../components/Footer";
import "../components/index.css";

const IndexPage = () => (
  <>
    <SEO title="Home"/>
    <Hero/>
    <About/>
    <Tracks/>
    <Footer/>
  </>
);

export default IndexPage;
