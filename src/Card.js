import React from "react";
import "./css/Card.css";
import { Link } from "react-router-dom";

const Card = ({ ricette }) => {
  return (
    <div className="card-container">
      {ricette.map((ricetta) => (
        <Link to={`/Recipe/${ricetta.id}`} key={ricetta.id}>
          <div className="card">
            <img src={ricetta.image} alt={ricetta.title} />
            <h3 className="card-H3">{ricetta.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
