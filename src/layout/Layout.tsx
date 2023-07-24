import React from "react";
import Navigation from "../context/Navigation";
import Footer from "../context/Footer";

const Layout = ({ children }: any) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
