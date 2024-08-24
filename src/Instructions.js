import React, { useCallback, useEffect, useState } from "react";
import "./css/Instructions.css";
import axios from "axios";

const Instructions = ({ recipeId }) => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [instruction, setInstruction] = useState([]);

  const FetchInstruction = useCallback(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setInstruction(response.data);
      })
      .catch((e) => {
        console.error("error due to: ", e);
        setInstruction([]);
      });
  }, [apiKey, recipeId]);
  useEffect(() => {
    FetchInstruction();
  }, [recipeId, FetchInstruction]);

  return (
    <div className="Instructions">
      {instruction.map((instruction, index) => (
        <div key={index}>
          <h3>{instruction.name}</h3>
          {instruction.steps.map((steps) => (
            <ol key={steps.number}>
              <li value={steps.number}>{steps.step}</li>
            </ol>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Instructions;
