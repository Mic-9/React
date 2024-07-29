import React from "react";
import "./css/Ingredients.css";

const Ingredients = ({ info }) => {
  return (
    <div>
      {info.extendedIngredients.map((ingradiente) => (
        <ul key={ingradiente.id}>
          <li>
            {ingradiente.name} {ingradiente.amount}
            {ingradiente.measures.metric.unitShort}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Ingredients;
