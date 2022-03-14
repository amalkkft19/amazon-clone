import React from "react";
import "./styles/Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./context/StateProvider";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();
  //add to basket button click

  const addToBasket = () => {
    //dispatch the item into datalayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon style={{ color: "#FFB700" }} key={i} />
            ))}
        </div>
      </div>
      <img alt="amazon lap" src={image} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
