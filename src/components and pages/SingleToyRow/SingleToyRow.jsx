/* eslint-disable react/prop-types */

import { useContext } from "react";
import { authContext } from "../../MyContext/AuthProvider";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";

// import '../AllToys/AllToys.css';
const SingleToyRow = ({ toy }) => {
  const { name, sellerName, category, price, availableQuantity, image, _id } =
    toy;
  const { user } = useContext(authContext);
  const navigate = useNavigate();
 
  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire("You have to log in first to view details");
      return navigate("/login",{ state: { id } });
    } else {
      navigate(`/toys/${id}`);
    }
  };
  return (
    <tr className="">
      <img style={{ height: "200px", width: "200px" }} src={image} alt="" />
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{name}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>
        {sellerName}
      </td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>{category}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>${price}</td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>
        {availableQuantity}
      </td>
      <td style={{ paddingTop: "84px", paddingBottom: "84px" }}>
      
          <button
            onClick={() => handleViewDetails(_id)}
            className="btn btn-outline-info"
          >
            View details
          </button>
       
      </td>
    </tr>
  );
};

export default SingleToyRow;
