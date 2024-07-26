import React from "react";
import "./css/Recipe.css";
import { Link } from "react-router-dom";

const Recipe = () => {
  return (
    <div className="Recipe">
      <h1>TITOLO RICETTA</h1>

      <img src="" alt="" />
      <ul>
        <li>servings</li>
        <li>ready in</li>
        <li>cocking</li>
        <li>preparation</li>
        <li>gluten free</li>
        <li>vegan</li>
      </ul>
      <div>
        <h3>ingradinenti</h3>
        <ul>
          <li>servings</li>
          <li>servings</li>
          <li>servings</li>
        </ul>
      </div>
      <div>
        <h3>istruzioni</h3>
        <p>qfhoghoghoighoh</p>
      </div>
      <Link to="/">Go back</Link>
    </div>
  );
};

export default Recipe;
