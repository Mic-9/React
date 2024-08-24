import React from "react";
import "./css/Card.css";
import { Link } from "react-router-dom";

const Card = ({ recipes }) => {
  return (
    <div className="card-container">
      {recipes.map((recipe) => (
        <Link to={`/Recipe/${recipe.id}`} key={recipe.id}>
          <div className="card">
            <img src={recipe.image} alt={recipe.title} />
            <h3 className="card-H3">{recipe.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Card;
