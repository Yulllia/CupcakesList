import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import PriceDelivery from "./pages/PriceDelivery";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import Footer from "./pages/Footer";
import AboutMySelf from "./pages/AboutMySelf";
import Gallery from "./components/Gallery";


function App() {
  return (
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/price" element={<PriceDelivery />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/myself" element={<AboutMySelf />} />
            <Route path="/:item" element={<Gallery />} />
            <Route path="/:item/:id" element={<DetailPage />} />
          </Routes>
          <Footer/>
        </Navigation>
      </BrowserRouter>
  );
}

export default App;
