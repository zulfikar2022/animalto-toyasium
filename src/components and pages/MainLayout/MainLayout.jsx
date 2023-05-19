import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SharedComponents/Footer/Footer";
import NavBar from "../SharedComponents/NavBar.jsx/NavBar";
import "./MainLayout.css";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = `Animalto Toyasium`;
  }, [location]);
  return (
    <div className="container mt-2">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
