import React, { Suspense, lazy } from "react";

import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Cart from "./components/Cart";
import {Outlet, createBrowserRouter} from 'react-router-dom'
import Shimmer from "./components/Shimmer";
import InstaMartProfile from "./components/InstaMartProfile";
import { Provider } from "react-redux";
import store from "./utils/store";

const About = lazy(()=>import("./components/About"))
const Contact = lazy(()=>import("./components/Contact"))
const RestaurantMenu = lazy(() =>import("./components/RestaurantMenu"))

const AppLayout =()=> {

  

  return (
    <Provider store={store} >
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
    </Provider>
  );
}

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    errorElement:<Error />,
    children:[
      {
        path:'/about',
        element:(<Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>)
      },
      {
        path:'/contact',
        element:(
          <Suspense fallback={<h1>loading....</h1>}>
          <Contact />
          </Suspense>
        )
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/instamart',
        element:<InstaMartProfile />
      },
      {
        path:'/',
        element:<Body user={
            {name: "sumit",
            email: "sumit@gmail.com"}
        } />
      },
      {
        path:'/restaurant/:resId',
        element:(<Suspense fallback={<Shimmer />}><RestaurantMenu /></Suspense>)
      }
    ]
  }
  
])

export default AppRouter

