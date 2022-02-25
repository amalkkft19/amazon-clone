import React from "react";
import "./styles/Product.css";
import StarIcon from "@mui/icons-material/Star";

const Product = ({ title, image, price, rating }) => {
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
              <StarIcon />
            ))}
        </div>
      </div>
      <img alt="amazon lap" src={image} />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
