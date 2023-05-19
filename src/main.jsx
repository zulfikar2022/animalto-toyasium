/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components and pages/MainLayout/MainLayout.jsx";
import HomePage from "./components and pages/Pages/HomePage/HomePage.jsx";
import Footer from "./components and pages/SharedComponents/Footer/Footer.jsx";
import Login from "./components and pages/Login/Login.jsx";
import Register from "./components and pages/Register/Register.jsx";
import AuthProvider from "./MyContext/AuthProvider.jsx";
import ErrorPage from "./components and pages/Pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
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
