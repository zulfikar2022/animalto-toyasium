/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useContext } from "react";
import "./ToyItem.css";
import { authContext } from "../../MyContext/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Rating from "react-rating";

const ToyItem = ({ image, name, price, rating, id }) => {
  const navigate = useNavigate("");
  const { user } = useContext(authContext);

  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire("You have to log in first to view details");
      return navigate("/login", { state: { id } });
    } else {
      navigate(`/toys/${id}`);
    }
  };
  return (
    <div className="card " data-aos="zoom-in" data-aos-duration="1000">
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="card-text ">
          Price: <span>${price}</span>
          <p style={{ marginBottom: "0", display: "flex" }}>
            <span style={{ marginRight: "10px" }}> {rating}</span>

            <Rating
              initialRating={rating}
              fullSymbol={<span>★</span>}
              emptySymbol={<span>☆</span>}
              readonly
            />
          </p>
        </div>

        <button
          onClick={() => handleViewDetails(id)}
          className="btn  btn-outline-info text-black"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ToyItem;
