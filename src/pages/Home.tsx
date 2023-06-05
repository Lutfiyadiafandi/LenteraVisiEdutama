import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Supremacy from "../components/Supremacy";
import Service from "../components/Service";
import Infografis from "../components/Infografis";
import Partner from "../components/Partner";
import Testimoni from "../components/Testimoni";

function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Supremacy />
      <Service />
      <Infografis />
      <Partner />
      <Testimoni />
    </div>
  );
}

export default Home;
