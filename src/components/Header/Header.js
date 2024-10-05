import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../../../src/images/image.png";
import "./Header.css";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div className="header-container">
      <div>
        <a href="/">
          <img className="logo" src={logo} alt="logo" />
        </a>
      </div>
      <div className="menu-lists">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/">
            <li
              style={{
                fontSize: "24px",
                color: "#4e4e4e",
                border: "3px solid #4d4d4d",
                borderRadius: "6px",
                padding: "10px",
                fontWeight: "500",
                cursor: "pointer",
              }}
            >
              Home
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/about">
            <li
              style={{
                fontSize: "24px",
                border: "3px solid #4d4d4d",
                borderRadius: "6px",
                padding: "10px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#4e4e4e",
                cursor: "pointer",
              }}
            >
              About
            </li>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/contact">
            <li
              style={{
                fontSize: "24px",
                border: "3px solid #4d4d4d",
                borderRadius: "6px",
                padding: "10px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#4e4e4e",
                cursor: "pointer",
              }}
            >
              Contact
            </li>
          </Link>

          <Link style={{textDecoration: "none"}} to="/cart">
          <li
              style={{
                fontSize: "24px",
                border: "3px solid #4d4d4d",
                borderRadius: "6px",
                padding: "10px",
                fontWeight: "500",
                textDecoration: "none",
                color: "#4e4e4e",
                cursor: "pointer",
              }}
            >
              Cart
            </li>
          </Link>
        </ul>
        <button
          style={{
            marginLeft: "5px",
            backgroundColor: "transparent",
            border: "3px solid #4e4e4e",
            borderRadius: "5px",
            fontSize: "18px",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setIsLoggedin((prev) => !prev)}
        >
          {isLoggedin ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Header;
