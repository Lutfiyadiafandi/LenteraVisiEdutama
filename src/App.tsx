import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import OurService from "./pages/service/OurService";
import Artikel from "./pages/article/Artikel";
import ContactUs from "./pages/contact/ContactUs";
import ArtikelDetails from "./pages/article/ArtikelDetails";
import BundlingDetails from "./pages/service/BundlingDetails";
import ServiceDetails from "./pages/service/ServiceDetails";
import ScrollToTop from "./utils/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/service" element={<OurService />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/service/bundling/:slug" element={<BundlingDetails />} />
        <Route path="/article" element={<Artikel />} />
        <Route path="/article/:slug" element={<ArtikelDetails />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
