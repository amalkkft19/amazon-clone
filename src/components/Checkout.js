import React from "react";
import Subtotal from "./Subtotal";
import "./styles/Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__title">
          <h2>Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
