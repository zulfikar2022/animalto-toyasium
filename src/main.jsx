/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components and pages/MainLayout/MainLayout.jsx";
import HomePage from "./components and pages/Pages/HomePage/HomePage.jsx";
import Login from "./components and pages/Login/Login.jsx";
import Register from "./components and pages/Register/Register.jsx";
import AuthProvider, { authContext } from "./MyContext/AuthProvider.jsx";
import AllToys from "./components and pages/AllToys/AllToys.jsx";
import ToyDetails from "./components and pages/ToyDetails/ToyDetails.jsx";
import MyToys from "./components and pages/MyToys/MyToys.jsx";
import PrivateRoute from "./components and pages/PrivateRoute/PrivateRoute.jsx";
import AddAToy from "./components and pages/AddAToy/AddAToy.jsx";
import UpdateToy from "./components and pages/UpdateToy/UpdateToy.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch('http://localhost:5000/allToys')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/allToys',
        element:<AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/allToys')
      },
      {
        path:'/toys/:id',
        element:<PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
      },
      {
        path:'/myToys',
        element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
      },
      {
        path:'/addToy',
        element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path:'/toy/updateToy',
        element:<PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
