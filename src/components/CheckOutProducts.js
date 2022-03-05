import React from "react";
import "./styles/CheckOutProducts.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./context/StateProvider";

const CheckOutProducts = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    //remove items from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkOutProduct">
      <img alt="product" className="checkOutProduct__img" src={image} />

      <div className="checkOutProduct__info">
        <p className="checkOutProduct__title">{title}</p>
        <p className="checkOutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkOutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} />
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckOutProducts;
