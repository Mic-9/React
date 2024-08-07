import React, { useEffect, useState } from "react";
import "./css/Recipe.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = () => {
  const { id } = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const [info, setInfo] = useState(null);

  const fetchInfo = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      )
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((e) => {
        console.error("errore dovuto a: ", e);
        setInfo(null);
      });
  };
  useEffect(() => {
    fetchInfo();
  }, [id]);

  if (!info) {
    return <h2>Caricamento...</h2>;
  }

  return (
    <div className="Recipe">
      <div key={info.id}>
        <h1>{info.title}</h1>
        <img src={info.image} alt={info.title} />
        <ul className="Info">
          <li>servings for: {info.servings}</li>
          <li>ready in: {info.readyInMinutes} min</li>
          <li>cooking: {info.cookingMinutes}min</li>
          <li>preparation: {info.preparationMinutes}min</li>
        </ul>
        <div>
          <h2 className="title">Ingredienti</h2>
          <Ingredients info={info} />
        </div>
        <div>
          <h2 className="title">Procedimento</h2>
          <Instructions info={info} />
        </div>
      </div>
      <Link className="Back" to="/">
        Go back
      </Link>
    </div>
  );
};

export default Recipe;
