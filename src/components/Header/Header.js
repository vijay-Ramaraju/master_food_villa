import React, { useState } from "react";
import useIsOnline from "../../Utils/useIsOnline";
import { Link } from "react-router-dom";
import logo from "../../../src/images/image.png";
import Login from "../Login/Login";
import { useSelector } from 'react-redux';


const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(""); 
  const isOnline = useIsOnline();
  const cartItems = useSelector(store => store.cart.items)

  const handleLogin = (values) => {
    setLoggedInUser(values.Name); 
    setIsLoggedin(true);
    setShowLogin(false); 
  };

  return (
    <div className="w-full rounded-md font-sans flex justify-between items-center bg-pink-50 p-2 shadow-md px-5 relative">
      <div className="flex-shrink-0">
        <a href="/">
          <img className="w-48 h-[120px]" src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex-grow flex justify-end">
        <ul className="flex gap-2 items-center">
          <Link to="/">
            <li className="text-2xl p-2 rounded-md border border-slate-300  text-black font-semibold hover:bg-orange-400  hover:text-white">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-2xl p-2 rounded-md border border-slate-300 text-black font-semibold hover:bg-orange-400  hover:text-white">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-2xl p-2 rounded-md border border-slate-300  text-black font-semibold hover:bg-orange-400  hover:text-white">
              Contact
            </li>
          </Link>
          <Link to="/cart">
            <li className="text-2xl p-2 rounded-md border border-slate-300  text-black font-semibold hover:bg-orange-400  hover:text-white">
              Cart {cartItems.length} items
            </li>
          </Link>
          <div className="">
            <button
              className="text-2xl p-2 rounded-md border border-slate-300  text-black font-semibold hover:bg-orange-400  hover:text-white"
              onClick={() => setShowLogin((prev) => !prev)}
            >
              {isLoggedin ? "Logout" : "Login"}
            </button>
          </div>
          <div className=" p-2 flex gap-2 border border-slate-300 items-center rounded font-semibold text-2xl">
            {loggedInUser || "Guest"}
            {isOnline ? (
              <div className="w-5 h-5 rounded-full bg-green-600"> </div>
            ) : (
              <div className="w-5 h-5 rounded-full  border border-slate-700 shadow-lg"></div>
            )}
          </div>
        </ul>
      </div>

      {showLogin && !isLoggedin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Header;
