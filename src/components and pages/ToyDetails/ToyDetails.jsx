import { useLoaderData, useLocation } from "react-router-dom";
import "./ToyDetails.css";
import { useEffect } from "react";

const ToyDetails = () => {
  const location = useLocation();

  const toyData = useLoaderData();

  const {
    image,
    name,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    details,
  } = toyData;
  useEffect(() => {
    document.title = `Animalto Toyasium- ${name}`;
  }, [location]);

  return (
    <div className="mt-3  toy-details" style={{ gap: "50px" }}>
      <img
        style={{ width: "100%", height: "300px" }}
        className="rounded"
        src={image}
        alt=""
      />
      <div>
        <p className="fs-2">
          Name: <span className="fw-bold"> {name}</span>
        </p>
        <p>
          Seller Name: <span className="fw-bold">{sellerName}</span>
        </p>
        <p>
          Seller Email: <span className="fw-bold">{sellerEmail}</span>
        </p>
        <p>
          Price: <span className="fw-bold">${price}</span>
        </p>
        <p>
          Rating: <span className="fw-bold">{rating}</span>
        </p>
        <p>
          Available Quantity:{" "}
          <span className="fw-bold"> {availableQuantity}</span>
        </p>
        <p className="fw-bold text-muted">{details}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
