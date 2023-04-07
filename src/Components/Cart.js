import React from "react";
import { formatter } from "./data";
import { Link } from "react-router-dom";

const Cart = ({ data, total, updateCart, removeFromCart, cartIcon }) => {
  const link = (
    <Link to="/shop" className="shop-link">
      {" "}
      shopping?
    </Link>
  );
  if (cartIcon === 0) {
    return <div className="emptyCart">Your cart is empty. Continue {link}</div>;
  } else
    return (
      <div>
        <h1>Your Cart</h1>
        <div className="cartItems">
          {data.map((item) => {
            if (item.cartQty !== 0) {
              return (
                <div key={item.id} className="cartItem flexEnd">
                  <div className="flex">
                    <img src={item.imgURL} className="cartImg"></img>
                    <div className="cartName">{item.name}</div>
                  </div>
                  <div className="flex">
                    <div className="cartPrice">
                      {formatter.format(item.price)}
                    </div>
                    <input
                      type="number"
                      min={0}
                      max={99}
                      defaultValue={item.cartQty}
                      className="qtyInput"
                      id={item.id}
                    ></input>
                    <button
                      className="deleteButton"
                      onClick={() => {
                        removeFromCart(item);
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="total">total: {total}</div>
        <button onClick={updateCart} className="updateButton">
          update cart
        </button>
        <button className="checkOutButton">checkout</button>
      </div>
    );
};

export default Cart;
