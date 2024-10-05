// src/components/Layout/Layout.jsx
import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />    
    </div>
  );
};

export default Layouts;
