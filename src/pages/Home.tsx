import React from "react";
import Navigation from "../components/Parts/Navigation";
import Footer from "../components/Parts/Footer";
import Banner from "../components/Homepage/Banner";
import Supremacy from "../components/Homepage/Supremacy";
import Service from "../components/Homepage/Service";
import Infografis from "../components/Homepage/Infografis";
import Partner from "../components/Homepage/Partner";
import Testimoni from "../components/Homepage/Testimoni";

function Home() {
  return (
    <>
      <Navigation />
      <Banner />
      <Supremacy />
      <Service />
      <Infografis />
      <Partner />
      <Testimoni />
    </>
  );
}

export default Home;
