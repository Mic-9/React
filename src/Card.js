import React from "react";
import "./css/Card.css";

const Card = ({ ricette }) => {
  return (
    <div className="cardContainer">
      {ricette.map((ricetta) => (
        <div className="card" key={ricetta.id}>
          <img className="cardImg" src={ricetta.image} alt={ricetta.title} />
          <h3 className="cardH3">{ricetta.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Card;
