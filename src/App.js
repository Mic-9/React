import React from "react";
import linkedin from "./img/linkedin-icon.svg";
import github from "./img/logo-github.svg";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Ricette Vegetariane</h1>
      <footer id="footer">
        <div className="f-container">
          <div className="f-item">Michele Maioli &copy; 2024</div>
          <div className="f-item">
            <a id="git" href="https://github.com/Mic-9" target="_blank">
              <img src={github} alt="GitHub Logo" />
            </a>
            <a
              id="link"
              href="https://www.linkedin.com/in/michelemaioli"
              target="_blank"
            >
              <img src={linkedin} alt="LinkedIn Icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
