import React from "react";
import "./css/Card.css";
import { Link } from "react-router-dom";

const Card = ({ ricette }) => {
  return (
    <Link to="/Recipe">
      <div className="cardContainer">
        {ricette.map((ricette) => (
          <div className="card" key={ricette.id}>
            <img className="cardImg" src={ricette.image} alt={ricette.title} />
            <h3 className="cardH3">{ricette.title}</h3>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default Card;
