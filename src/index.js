import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from './components/Header/Header'
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import About from './components/About/About'
import Error from './components/Error/Error'
import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";

export const AppLayout = () => {
  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>
)}

const routing = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routing} /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
