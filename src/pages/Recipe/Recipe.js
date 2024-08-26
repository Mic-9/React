import React, { useCallback, useEffect, useState } from "react";
import "./Recipe.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Ingredients from "../../components/Ingredients/Ingredients";
import Instructions from "../../components/Instructions/Instructions";
import { Helmet } from "react-helmet";

const Recipe = () => {
  const { id } = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const [info, setInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInfo = useCallback(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      )
      .then((response) => {
        setInfo(response.data);
        setError(null);
      })
      .catch((e) => {
        console.error("errore dovuto a: ", e);
        setError("Impossibile caricare la ricetta.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [apiKey, id]);
  useEffect(() => {
    fetchInfo();
  }, [id, fetchInfo]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="Recipe">
      <Helmet>
        <title>{info.title}</title>
      </Helmet>

      <div key={info.id}>
        <h1>{info.title}</h1>
        <img src={info.image} alt={info.title} />
        <ul className="Info">
          <li>Servings for: {info.servings}</li>
          <li>Ready in: {info.readyInMinutes} min</li>
        </ul>
        <div>
          <h2 className="title">Ingredients</h2>
          <Ingredients info={info} />
        </div>
        <div>
          <h2 className="title">Instructions</h2>
          <Instructions recipeId={info.id} />
        </div>
      </div>
      <Link className="Back" to="/">
        Go back
      </Link>
    </div>
  );
};

export default Recipe;
