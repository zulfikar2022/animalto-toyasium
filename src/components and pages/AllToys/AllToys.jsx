import { useLocation } from "react-router-dom";
import "./AllToys.css";
import { useEffect } from "react";

const AllToys = () => {
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname.slice(1));
    document.title = `Animalto Toyasium -${location.pathname.slice(1)}`;
  }, [location]);
  return (
    <div>
      <p>This is all toys</p>
    </div>
  );
};

export default AllToys;
