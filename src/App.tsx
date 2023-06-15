import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import LayananKami from "./pages/LayananKami";
import Artikel from "./pages/Artikel";
import ContactUs from "./pages/ContactUs";
import ArtikelContent from "./pages/ArtikelContent";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/tentangkami" element={<TentangKami />} />
          <Route path="/layanankami" element={<LayananKami />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikelcontent" element={<ArtikelContent />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
