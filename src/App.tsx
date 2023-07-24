import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs";
import OurService from "./pages/service/OurService";
import Artikel from "./pages/article/Artikel";
import ContactUs from "./pages/contact/ContactUs";
import ArtikelDetails from "./pages/article/ArtikelDetails";
import BundlingDetails from "./pages/service/BundlingDetails";
import ServiceDetails from "./pages/service/ServiceDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/service" element={<OurService />} />
        <Route path="/service/:slug" element={<ServiceDetails />} />
        <Route path="/service/bundling/:slug" element={<BundlingDetails />} />
        <Route path="/article" element={<Artikel />} />
        <Route path="/article/:slug" element={<ArtikelDetails />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
