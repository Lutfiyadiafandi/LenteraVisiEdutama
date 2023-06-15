import Navigation from "../components/Parts/Navigation";
import Footer from "../components/Parts/Footer";
import ArtikelDetail from "../components/Artikel/ArtikelDetail";
import Blog from "../components/Artikel/Blog";

function ArtikelContent() {
  return (
    <>
      <Navigation />
      <ArtikelDetail />
      <Blog />
      <Footer />
    </>
  );
}

export default ArtikelContent;
