import React from "react";
import "./css/Search.css";

const Search = () => {
  return (
    <form className="search">
      <input className="input" type="text"></input>
      <button className="submit" type="submit">
        🔍
      </button>
    </form>
  );
};

export default Search;
