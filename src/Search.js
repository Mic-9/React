import React from "react";
import "./css/Search.css";

const Search = ({ search, updateSearch, /*submit,*/ handleSubmit }) => {
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={search}
        onChange={updateSearch}
      ></input>
      <button className="submit" type="submit" /*onClick={submit}*/>
        🔍
      </button>
    </form>
  );
};

export default Search;
