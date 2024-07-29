import React, { useEffect, useState } from "react";
import "./css/Recipe.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Ingredients from "./Ingredients";

const Recipe = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [info, setInfo] = useState([]);

  const FetchInfo = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/716429/information?apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setInfo([response.data]);
      })
      .catch((e) => {
        console.error("errore dovuto a: ", e);
        setInfo([]);
      });
  };
  useEffect(() => {
    FetchInfo([]);
  }, []);

  return (
    <div className="Recipe">
      {info.map((info) => (
        <div key={info.id}>
          <h1>{info.title}</h1>

          <img src={info.image} alt={info.title} />
          <ul>
            <li>servings for: {info.servings}</li>
            <li>ready in: {info.readyInMinutes} min</li>
            <li>cooking: {info.cookingMinutes}min</li>
            <li>preparation: {info.preparationMinutes}min</li>
          </ul>
          <div>
            <h3>ingradinenti</h3>
            <Ingredients info={info} />
          </div>
          <div>
            <h3>istruzioni</h3>
            <p>qfhoghoghoighoh</p>
          </div>
        </div>
      ))}

      <Link to="/">Go back</Link>
    </div>
  );
};

export default Recipe;
