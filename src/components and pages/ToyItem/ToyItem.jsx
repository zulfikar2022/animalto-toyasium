/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import "./ToyItem.css";
import { authContext } from "../../MyContext/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "react-rating";

const ToyItem = ({ image, name, price, rating,id }) => {
  console.log({ image });
  const navigate = useNavigate("");
  const { user } = useContext(authContext);

  const handleViewDetails = () => {
    console.log("from inside the onclick handler");
    if (!user) {
      Swal.fire("You have to log in first to view details");
      return navigate("/login");
    }
  };
  return (
    <div className="card ">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text ">
          Price: <span>${price}</span>
          <p style={{ marginBottom: "0", display: "flex" }}>
            <span style={{ marginRight: "10px" }}> {rating}</span>
            <Rating initialRating={rating} readonly />
          </p>
        </p>
        <Link to={`/${id}`}>
          <button
            onClick={handleViewDetails}
            className="btn  btn-outline-info text-black"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyItem;
