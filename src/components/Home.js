import React from "react";
import HomeImage from "./images/amazonhome.jpg";
import "./styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div>
        <img className="home__image" src={HomeImage} alt="home" />
        <div className="home__row">
          <Product />
          <Product />
          {/* product */}
        </div>
        <div className="home__row">
          {/* product */}
          {/* product */}
          {/* product */}
        </div>
        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
};

export default Home;
