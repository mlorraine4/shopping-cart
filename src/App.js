import { useState, useEffect } from "react";
import "./App.css";
import data from "./Components/data";
import Router from "./Components/Router";
import uniqid from "uniqid"

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [cartIcon, setCartIcon] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(data);
  }, []);

  const addToCart = (item) => {
      setCartItem(item);
  };

  const removeFromCart = (item) => {

  };

  useEffect(() => {
    console.log('use effect, adding item to cart');
    if (Object.keys(cartItem).length !== 0) {
    setCart((prev) => [...prev, cartItem]);
    setTotal(total + cartItem.price);
    setCartIcon(cartIcon + 1);
    }
  }, [cartItem]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  //  useEffect(() => {
  //   console.log(total);
  //  }, [total])

  return (
    <div className="App">
      <Router
        data={items}
        addToCart={addToCart}
        cartIcon={cartIcon}
        cart={cart}
        total={total}
      />
    </div>
  );
}

export default App;
