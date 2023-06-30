import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TentangKami from "./pages/TentangKami";
import LayananKami from "./pages/LayananKami";
import Artikel from "./pages/Artikel";
import ContactUs from "./pages/ContactUs";
import Artikel_Details from "./pages/Artikel_Details";
import LayananKami_ProductDetails from "./pages/LayananKami_ProductDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<TentangKami />} />
        <Route path="/ourservice" element={<LayananKami />} />
        <Route
          path="/ourservice/productdetails/:id"
          element={<LayananKami_ProductDetails />}
        />
        <Route path="/artikel" element={<Artikel />} />
        <Route path="/artikel/details/:id" element={<Artikel_Details />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}
