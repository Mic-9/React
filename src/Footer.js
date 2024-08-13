import React from "react";
import linkedin from "./img/linkedin-icon.svg";
import github from "./img/logo-github.svg";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer" id="footer">
      <div className="F-container">
        <div className="F-item">Michele Maioli &copy; 2024</div>
        <div className="F-item">
          <a
            id="git"
            href="https://github.com/Mic-9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub Logo" />
          </a>
          <a
            id="link"
            href="https://www.linkedin.com/in/michelemaioli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="LinkedIn Icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
