import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './../componements/Home/Home';
import Main from './../layOut/Main';
import About from './../componements/About/About';
import Blog from './../componements/Blog/Blog';
import Login from './../componements/Login/Login';
import Register from './../componements/Register/Register';
import Singalchefs from './../componements/Chefs/Singalchefs/Singalchefs';
import ErrorPage from './../componements/ErrorPage/ErrorPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: () => fetch('https://flavors-of-bangladesh-project-server.vercel.app/chafs')
        loader: () => fetch('https://flavors-of-bangladesh-project-server.vercel.app/chafs')
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/chefs/:id",
        //   element: <Singalchefs></Singalchefs>,
        element: <PrivateRoute><Singalchefs></Singalchefs></PrivateRoute>,
        loader: () => fetch('https://flavors-of-bangladesh-project-server.vercel.app/chafs')
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      },
    ]
  },
]);
export default router;