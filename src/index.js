  import React, { lazy, Suspense } from "react";
  import ReactDOM from "react-dom/client";
  import './index.css'
  import Header from './components/Header/Header'
  import Body from "./components/Body/Body";
  import Footer from "./components/Footer/Footer";
  import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
  import reportWebVitals from "./reportWebVitals";
  import Error from './components/Error/Error'
  import RestaurantMenu from "./components/RestaurantMenu/RestaurantMenu";
  import Cart from "./components/Cart/Cart";
  import Shimer from "./components/Shimer/Shimer";

  const About = lazy(()=>import("./components/About/About"))
  const Contact = lazy(() => 
    import("./components/Contact/Contact")
  );

  export const AppLayout = () => {
    return (<div className="font-sans max-h-full min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
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
          element: (
            <Suspense fallback={<Shimer />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Suspense fallback={<h1>Loading...</h1>}>
            <Contact /></Suspense>,
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

  reportWebVitals();
