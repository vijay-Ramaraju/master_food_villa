  import React, { lazy, Suspense,useEffect,useState } from "react";
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
  import {Provider} from 'react-redux'
import UserContext from "./Utils/UserContext";
import appStore from "./Utils/Redux/appStore";

  const About = lazy(()=>import("./components/About/About"))
  const Contact = lazy(() => 
    import("./components/Contact/Contact")
  );

export const AppLayout = () => {
  const [userName, setUserName] = useState("")
  useEffect(() => {
    const data = {
      name:"Vijay Nagaraju",
    }
    setUserName(data.name)
  },[])
  return (
    <Provider store={appStore}>
      <div className="font-sans max-h-full min-h-screen">
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </div>
    </Provider>
  );}

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
