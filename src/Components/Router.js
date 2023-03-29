import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Shop from "./Shop";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Home from "./Home";

const Router = ({data, addToCart, cartIcon, cart, total}) => {
  console.log(data);
  return (
    <div>
      <BrowserRouter>
        <Navbar cartIcon={cartIcon}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop data={data} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} total={total}/>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
