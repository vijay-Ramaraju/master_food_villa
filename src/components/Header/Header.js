import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import { Link } from "react-router-dom";
import logo from "../../../src/images/image.png";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  // className = "fixed top-0 left-0 right-0 z-50";
  return (
    <div className=" w-full rounded-md font-sans flex justify-between items-center bg-pink-50 p-2 shadow-md px-5">
      <div className="flex-shrink-0">
        <a href="/">
          <img className="w-48 h-[120px]" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="flex gap-2 items-center">
          <Link to="/">
            <li className="text-2xl p-2 rounded-md  bg-red-400 text-white font-semibold hover:bg-orange-400  hover:text-white">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="text-2xl p-2 rounded-md  bg-red-400 text-white font-semibold hover:bg-orange-400  hover:text-white">
              About
            </li>
          </Link>

          <Link to="/contact">
            <li className="text-2xl p-2 rounded-md  bg-red-400 text-white font-semibold hover:bg-orange-400  hover:text-white">
              Contact
            </li>
          </Link>

          <Link to="/cart">
            <li className="text-2xl p-2 rounded-md  bg-red-400 text-white font-semibold hover:bg-orange-400  hover:text-white">
              Cart
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex-shrink-0">
        <button
        className="text-2xl p-2 rounded-md  bg-red-400 text-white font-semibold hover:bg-orange-400  hover:text-white"
        onClick={() => setIsLoggedin((prev) => !prev)}
      >
        {isLoggedin ? "Logout" : "Login"}
      </button>
      </div>
      
    </div>
  );
};

export default Header;
