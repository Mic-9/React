import React from "react";
import "./css/Ingredients.css";

const Ingredients = ({ info }) => {
  return (
    <div className="Ingra">
      <ul>
        {info.extendedIngredients.map((ingradiente) => (
          <li key={ingradiente.id}>
            {ingradiente.name}: {ingradiente.amount}{" "}
            {ingradiente.measures.metric.unitShort}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
