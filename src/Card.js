import React from "react";
import "./css/Card.css";
import { Link } from "react-router-dom";

const Card = ({ ricette }) => {
  return (
    <div className="cardContainer">
      {ricette.map((ricetta) => (
        <Link to={`/Recipe/${ricetta.id}`} key={ricetta.id}>
          <div className="card">
            <img className="cardImg" src={ricetta.image} alt={ricetta.title} />
            <h3 className="cardH3">{ricetta.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
