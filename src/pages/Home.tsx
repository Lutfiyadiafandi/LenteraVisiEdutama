import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Supremacy from "../components/Supremacy";
import Program from "../components/Program";
import Infografis from "../components/Infografis";
import Partner from "../components/Partner";
import Testimoni from "../components/Testimoni";

function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Supremacy />
      <Program />
      <Infografis />
      <Partner />
      <Testimoni />
    </div>
  );
}

export default Home;
