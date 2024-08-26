import React from "react";
import "./Ingredients.css";

const Ingredients = ({ info }) => {
  return (
    <div className="ingr">
      <ul>
        {info.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>
            {ingredient.name}: {ingredient.amount}{" "}
            {ingredient.measures.metric.unitShort}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
