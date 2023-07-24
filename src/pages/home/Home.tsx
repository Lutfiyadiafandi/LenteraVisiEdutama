import Banner from "../../components/home/Banner";
import Whylve from "../../components/home/Whylve";
import Service from "../../components/home/Service";
import Infografis from "../../components/home/Infografis";
import Partner from "../../components/home/Partner";
import Testimoni from "../../components/home/Testimoni";
import Blog from "../../components/article/Blog";
import Layout from "../../layout/Layout";

function Home() {
  return (
    <Layout>
      <Banner />
      <Whylve />
      <Service />
      <Infografis />
      <Partner />
      <Testimoni />
      <Blog />
    </Layout>
  );
}

export default Home;
