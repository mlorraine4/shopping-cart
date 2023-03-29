import React from "react";

// {
//   data.map((item) => (
//     <Item key={item.id} item={item} addToCart={addToCart} />
//   ));
// }

const Cart = ({ cart, total }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.map((item) => (
        <div key={item.id} className="flex cartItem" id={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
      {/* <div>total: ${total}</div>
      <button>checkout</button> */}
    </div>
  );
};

export default Cart;
