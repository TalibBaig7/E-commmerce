import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductdetailPage from "./Productdetail";
import Casual from "./Casual"; 
import ShoppingCartPage from "./ShoppingCartPage"; 
import Layout from "./Components/Layout";
import SignUp from "./Components/SignUp";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-detail" element={<ProductdetailPage />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
