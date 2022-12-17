import MainPage from "./pages/MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import PriceDelivery from "./pages/PriceDelivery";
import Navigation from "./components/Navigation";
import ContactPage from "./pages/ContactPage";
import { RecoilRoot } from "recoil";
import Footer from "./pages/Footer";
import AboutMySelf from "./pages/AboutMySelf";
import Gallery from "./components/Gallery";


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Navigation>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/price" element={<PriceDelivery />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/myself" element={<AboutMySelf />} />
            <Route path="/cupcake" element={<Gallery />} />
            <Route path="/macarons" element={<Gallery />} />
            <Route path="/:item/:id" element={<DetailPage />} />
          </Routes>
          <Footer/>
        </Navigation>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
