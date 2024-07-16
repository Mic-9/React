import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import Card from "./Card";
import "./css/App.css";

const App = () => {
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <div className="App">
      <h1>Ricette Vegetariane</h1>
      <Search></Search>
      <div className="CardsContainer">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
