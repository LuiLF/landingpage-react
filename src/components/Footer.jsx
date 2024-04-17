import React from "react";
import Logo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualidade</span>
          <span>Suporte</span>
          <span>Compartilhar</span>
          <span>Carreiras</span>
          <span>Depoimentos</span>
          <span>Trabalho</span>
        </div>
        <div className="footer-section-columns">
          <span>(16) 912345678</span>
          <span>Avenida Nove de Julho</span>
          <span>foodie@gmail.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Termos de Uso</span>
          <span>Política de Privacidade</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
