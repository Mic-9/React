import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/Card.css";

const Card = () => {
  const [ricette, setRicette] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&number=100`
      )
      .then((response) => {
        if (response.data && Array.isArray(response.data.results)) {
          setRicette(response.data.results);
        } else {
          console.error("errore risposta api");
          setRicette([]);
        }
      })
      .catch((e) => {
        console.error("errore dovuto a: ", e);
        setRicette([]);
      });
  }, []);

  return (
    <div className="cardContainer">
      {Array.isArray(ricette) && ricette.length > 0 ? (
        ricette.map((ricetta) => (
          <div className="card" key={ricetta.id}>
            <img className="cardImg" src={ricetta.image} alt={ricetta.title} />
            <h3 className="cardH3">{ricetta.title}</h3>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
