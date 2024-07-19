import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import Card from "./Card";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Ricette Vegetariane</h1>
      <Search></Search>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
};

export default App;
