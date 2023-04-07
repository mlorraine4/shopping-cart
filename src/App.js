import { useState, useEffect } from "react";
import { data, formatter } from "./Components/data";
import Router from "./Components/Router";

function App() {
  const [items, setItems] = useState([]);
  const [cartIcon, setCartIcon] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setItems(data);
  }, []);

  useEffect(() => {
    let newTotal = 0;
    let newQty = 0;
    for (let i = 0; i < items.length; i++) {
      let subTotal = items[i].cartQty * items[i].price;
      newTotal += subTotal;
      newQty += items[i].cartQty;
    }
    newTotal = formatter.format(newTotal);
    setTotal(newTotal);
    setCartIcon(newQty);
    document.querySelector(".cartQty").classList.toggle("expand");
    setTimeout(() => {
      document.querySelector(".cartQty").classList.toggle("expand");
    }, 250);
    if (document.querySelector(".total") !== null) {
      document.querySelector(".total").classList.toggle("expandTotal");
    }
    setTimeout(() => {
      if (document.querySelector(".total") !== null) {
        document.querySelector(".total").classList.toggle("expandTotal");
      }
    }, 250);
  }, [items]);

  const addToCart = (item, e) => {
    e.target.disabled = true;
    e.target.innerHTML = "adding...";
    const newItems = [...items];
    newItems[items.indexOf(item)].cartQty++;
    setItems(newItems);
    setTimeout(() => {
      added(e.target);
    }, 1000);
  };

  const added = (target) => {
    target.innerHTML = "added";
    target.style.backgroundColor = "black";
    setTimeout(() => {
      resetButton(target);
    }, 500);
  };

  const resetButton = (target) => {
    target.innerHTML = "add to cart";
    target.style.backgroundColor = "rgb(5, 151, 199)";
    target.disabled = false;
  };

  const removeFromCart = (item) => {
    setCartIcon(cartIcon - item.cartQty);
    const newItems = [...items];
    newItems[items.indexOf(item)].cartQty = 0;
    setItems(newItems);
  };

  const updateCart = () => {
    let inputs = document.querySelectorAll(".qtyInput");
    for (let i = 0; i < inputs.length; i++) {
      const match = items.find(({ id }) => id === inputs[i].id);
      if (match !== null) {
        const newItems = [...items];
        newItems[items.indexOf(match)].cartQty = Number(inputs[i].value);
        setItems(newItems);
      }
    }
  };

  return (
    <div className="App">
      <Router
        data={items}
        addToCart={addToCart}
        cartIcon={cartIcon}
        total={total}
        updateCart={updateCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
