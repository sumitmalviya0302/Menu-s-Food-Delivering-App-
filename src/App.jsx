import React from "react";

import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import {Outlet, createBrowserRouter} from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'

const AppLayout =()=> {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
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
        element:<About />
      },
      {
        path:'/contact',
        element:<Contact />
      },
      {
        path:'/cart',
        element:<Cart />
      },
      {
        path:'/',
        element:<Body />
      },
      {
        path:'/restaurant/:resId',
        element:<RestaurantMenu />
      }
    ]
  }
  
])

export default AppRouter

