import React from "react";
import HomeImage from "./images/amazonhome.jpg";
import "./styles/Home.css";
import Product from "./Product";
import Header from "./Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div>
        <img className="home__image" src={HomeImage} alt="home" />
        <div className="home__row">
          <Product
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – September 13, 2011"
            image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg"
            price={29.9}
            rating={5}
          />
          <Product
            title="Zero to One: Notes on Start Ups, or How to Build the Future Paperback – 18 September 2014
            by Peter Thiel  (Author), Blake Masters  (Author)"
            image="https://images-na.ssl-images-amazon.com/images/I/51z7mZZKRgL._SX317_BO1,204,203,200_.jpg"
            price={23.9}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title='ASUS TUF Gaming F15 Laptop 15.6" (39.62 cms) FHD 144Hz, Intel Core i5-10300H 10th Gen, GeForce GTX 1650 4GB GDDR6 Graphics (8GB RAM/512GB NVMe SSD/Windows 10/Fortress Gray/2.30 Kg), FX566LH-HN257T'
            image="https://m.media-amazon.com/images/I/914o5xV1+8L._SL1500_.jpg"
            price={163.9}
            rating={4}
          />
          <Product
            title="Acer Nitro 5 AN515-56 11th Gen Intel Core i5-11300H 15.6 inches FHD 144Hz IPS Display Gaming Laptop (NVIDIA GeForce GTX 1650 Laptop Graphics, Win 10, 8GB DDR4 512GB SSD, 2.2Kg)"
            image="https://m.media-amazon.com/images/I/71evs2WKJjS._SL1500_.jpg"
            price={153.9}
            rating={5}
          />
          <Product
            title='Dell New 14" 2in1 Laptop i3-1125G4 2in1, 8GB, 256GB SSD, Win 11 + MSO 21, 14" (35.56 cms) Touch FHD Display, Platinum Silver Color, FPR + Backlit KB (Inspiron 5410, D560725WIN9SE)'
            image="https://m.media-amazon.com/images/I/71hFNVZKcoS._SL1280_.jpg"
            price={143.3}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            title="EZVIZ C8C Outdoor Wireless Pan/Tilt Camera|1080p resolution|Motorized Pan & Tilt|Color Night Vision|IP65 Dust and Water Protection|H.265 Video Compression|Supports MicroSD Card Storage (up to 256 GB)|"
            image="https://m.media-amazon.com/images/I/31SrW7qHb1L.jpg"
            price={73.5}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
