import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Footer from "./Footer";
import Card from "./Card";
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
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&diet=vegetarian&query=${query}&number=99`
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
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchRicette("");
  }, []);

  useEffect(() => {
    if (submit) {
      fetchRicette(submit);
    }
  }, [submit]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Ricette Vegetariane</h1>
      <Search
        search={search}
        updateSearch={updateSearch}
        handleSubmit={handleSubmit}
      ></Search>
      {loading ? <h2>loading...</h2> : <Card ricette={ricette}> </Card>}
      <Footer></Footer>
    </div>
  );
};

export default App;

/*


IMPARA A USARE

REACT ROUTER


*/
