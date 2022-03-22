import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h3 className="order">Order Summary</h3>
      <div className="order-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${}</p>
        <p>Total Shipping Charge: ${}</p>
        <p>Tax: ${}</p>
        <h4>Grand Total: ${}</h4>
      </div>
    </div>
  );
};

export default Cart;
