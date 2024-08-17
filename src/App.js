import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search";
import Footer from "./Footer";
import Card from "./Card";
import Recipe from "./Recipe";
import "./css/App.css";

const App = () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState("");
  const [ricette, setRicette] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRicette = (query) => {
    setLoading(true);
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&query=${query}&number=100`
      )
      .then((response) => {
        setRicette(response.data.results);
      })
      .catch((e) => {
        console.error("errore dovuto a: ", e);
        setRicette([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRicette(submit);
  }, [submit, fetchRicette]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
    setSearch("");
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Vegetarian Recipes</h1>
                <Search
                  search={search}
                  updateSearch={(e) => setSearch(e.target.value)}
                  handleSubmit={handleSubmit}
                ></Search>

                {loading ? <h2>Loading...</h2> : <Card ricette={ricette} />}
              </>
            }
          />
          <Route path="/Recipe/:id" element={<Recipe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
