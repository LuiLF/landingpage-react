import React from "react";
import PickMeals from "../assets/pick-meals-image.png";
import ChooseMeals from "../assets/choose-image.png";
import DeliveryMeals from "../assets/delivery-image.png";

function Work() {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Garantia de Qualidade",
      text: "Selecionamos meticulosamente os ingredientes e mantemos protocolos rigorosos de higiene para garantir uma experiência gastronômica segura e agradável.",
    },
    {
      image: ChooseMeals,
      title: "Pedidos Personalizados",
      text: "Adapte sua refeição ao seu gosto com nossas opções personalizáveis, permitindo que você crie uma experiência gastronômica que se adapte perfeitamente às suas preferências.",
    },
    {
      image: DeliveryMeals,
      title: "Entregas Rápidas e de Qualidade",
      text: "Priorizamos entregas rápidas. Da cozinha para a sua mesa em tempo recorde, nosso compromisso com a agilidade do serviço significa que você nunca terá que esperar muito para que sua deliciosa refeição chegue.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Serviços</p>
        <h1 className="primary-heading">Como funciona</h1>
        <p className="primary-text">
          Entendemos a importância de um bom atendimento. Nossa equipe simpática
          está aqui para garantir que você tenha uma experiência gastronômica
          agradável do início ao fim.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
