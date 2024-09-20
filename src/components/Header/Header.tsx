import React from "react";

import logo from "../../assets/logo.png";

const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <a href="/" className="logo-link">
            <img src={logo} alt="logo image" />
            <h3>
              <p>Niagara</p>
              <p>Restaurant</p>
            </h3>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
