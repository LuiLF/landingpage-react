import React from "react";
import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Saboreie refeições deliciosas, direto no seu prato, sempre frescas e
            quentes!
          </h1>
          <p className="primary-text">
            Abra o apetite para as nossas delícias! Comidinhas feitas sob medida
            para você, entregues na porta. É só saborear cada mordida sem
            espera!
          </p>
          <button className="secondary-button">
            Peça Agora <FiArrowRight />
            {""}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
