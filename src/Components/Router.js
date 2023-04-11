import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop/Shop";
import Cart from "./Cart";
import Home from "./Home";
import SoftCorals from "./Shop/SoftCorals";
import LPS from "./Shop/LPS";
import SPS from "./Shop/SPS";
import Footer from "./Footer";

const Router = ({
  data,
  addToCart,
  cartIcon,
  total,
  updateCart,
  removeFromCart,
}) => {
  return (
    <BrowserRouter>
      <Navbar cartIcon={cartIcon} />
      <Routes>
        <Route path="/shopping-cart" element={<Home />} />
        <Route path="/shopping-cart/home" element={<Home />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
        <Route
          path="/shopping-cart/shop/soft-corals"
          element={<SoftCorals data={data} addToCart={addToCart} />}
        />
        <Route
          path="/shopping-cart/shop/lps-corals"
          element={<LPS data={data} addToCart={addToCart} />}
        />
        <Route
          path="/shopping-cart/shop/sps-corals"
          element={<SPS data={data} addToCart={addToCart} />}
        />

        <Route
          path="/shopping-cart/cart"
          element={
            <Cart
              data={data}
              total={total}
              updateCart={updateCart}
              removeFromCart={removeFromCart}
              cartIcon={cartIcon}
            />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
