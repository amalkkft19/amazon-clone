import React from "react";
import Subtotal from "./Subtotal";
import "./styles/Checkout.css";
import { useStateValue } from "./context/StateProvider";
import CheckOutProducts from "./CheckOutProducts";
import Header from "./Header";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__title">
            <h2>Shopping Cart</h2>
            {basket.map((item) => (
              <CheckOutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
