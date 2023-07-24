import About from "../../components/about/About";
import Message from "../../components/about/Message";
import Gallery from "../../components/about/Gallery";
import Layout from "../../layout/Layout";
import VisiMisi from "../../components/about/VisiMisi";

function AboutUs() {
  return (
    <Layout>
      <Gallery />
      <About />
      <VisiMisi />
      <Message />
    </Layout>
  );
}

export default AboutUs;
