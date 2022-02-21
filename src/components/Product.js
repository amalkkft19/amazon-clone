import React from "react";
import "./styles/Product.css";
import StarIcon from "@mui/icons-material/Star";

const Product = () => {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>11</strong>
        </p>
        <div className="product__rating">
          <StarIcon />
        </div>
      </div>
      <img
        alt="amazon lap"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg"
      />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
