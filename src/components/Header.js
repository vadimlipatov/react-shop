import React from "react";

const Header = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Fortnite Shop
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a
                href="https://github.com/vadimlipatov/react-shop"
                target="_blank"
                rel="noreferrer"
              >
                Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
