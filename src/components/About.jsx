import React from "react"
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>
        <h1 className="primary-heading">
        Comida é uma parte importante de uma dieta balanceada.
        </h1>
        <p className="primary-text">
        Na FOODIE, acreditamos que a comida desempenha um papel crucial em um estilo de vida saudável. 
        </p>
        <p className="primary-text">
        É por isso que na FOODIE nos comprometemos a oferecer refeições deliciosas preparadas com ingredientes de qualidade, garantindo que sua experiência gastronômica seja não apenas prazerosa, mas também nutritiva.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba Mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assista ao Vídeo
          </button>
        </div>
      </div>
    </div>
  )
}

export default About