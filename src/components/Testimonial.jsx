import React from "react";
import ProfilePic from "../assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

function Testimonial() {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Depoimentos</p>
        <h1 className="primary-heading">O Que Dizem</h1>
        <p className="primary-text">
          Descubra o que nossos clientes satisfeitos dizem sobre suas
          experiências gastronômicas conosco. De elogios calorosos a depoimentos
          incríveis, veja por que eles sempre voltam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt=""></img>
        <div className="testimonial-starts-container">
          <p>
            Comida caseira deliciosa, quentinha e entregue rapidinho! Perfeito
            para quem não tem tempo de cozinhar.
          </p>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Gabriel L.</h2>
      </div>
    </div>
  );
}

export default Testimonial;
