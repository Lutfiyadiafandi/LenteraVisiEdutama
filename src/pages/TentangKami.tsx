import Navigation from "../components/Parts/Navigation";
import Footer from "../components/Parts/Footer";
import About from "../components/TentangKami/About";
import Message from "../components/TentangKami/Message";
import Gallery from "../components/TentangKami/Gallery";

function TentangKami() {
  return (
    <>
      <Navigation />
      <Gallery />
      <About />
      <Message />
      <Footer />
    </>
  );
}

export default TentangKami;
