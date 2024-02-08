import React from "react";
import Works from "../components/Works";
import Film from "../components/Film";
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import Services from "../components/Services";
import FilmView from "../components/FilmView";
const Home = () => {
  return (
    <Layout>
      <Contact />
      <Works />
      <Services />
      <Film />
      <FilmView />
    </Layout>
  );
};

export default Home;
