import Home from "./Components/Home";
import Footer from "./Footer";
import ProductDetailPage from "./Productdetail";
import Casual from "./Casual";
import ShoppingCartPage from "./ShoppingCartPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail" element={<ProductDetailPage />} />
      <Route path="/casual" element={<Casual />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  );
}

export default App;
