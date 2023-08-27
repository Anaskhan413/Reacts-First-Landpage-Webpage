import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BiryaniImage from "../Assets/home-biryani-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            
"Favorite food delivered piping hot and fresh to you."
          </h1>
          <p className="primary-text">
           
"Switch to healthy cooking with prep masters handling peeling, chopping, marinating, letting you create from fresh ingredients."
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BiryaniImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
