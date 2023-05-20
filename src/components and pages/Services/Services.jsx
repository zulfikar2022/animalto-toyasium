import "./Services.css";
import { FaDownload, FaPhone, FaTruck, FaTruckMoving } from "react-icons/fa";

const Services = () => {
  return (
    <div className="service-body">
      <div className="service-item">
        <div className="service-image">
          <FaTruck style={{ fontSize: "70px", color: "#87ceeb" }} />
        </div>
        <div
          className="service-text"
          style={{ borderRight: "1px solid black", paddingRight: "10px" }}
        >
          <p>FAST SHIPPING</p>
          <p>Fast Shipping</p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-image">
          <FaDownload style={{ fontSize: "70px", color: "#87ceeb" }} />{" "}
        </div>
        <div
          className="service-text"
          style={{ borderRight: "1px solid black", paddingRight: "10px" }}
        >
          <p>ONLINE PAYMENT</p>
          <p>Payment Methods</p>
        </div>
      </div>
      <div className="service-item">
        <div className="service-image">
          <FaPhone style={{ fontSize: "70px", color: "#87ceeb" }} />
        </div>
        <div
          className="service-text"
          style={{ borderRight: "1px solid black", paddingRight: "10px" }}
        >
          <p>24/7 SUPPORT</p>
          <p>Unlimited help desk.</p>
        </div>
      </div>
      <div className="service-item">
        {" "}
        <div className="service-image">
          <FaTruckMoving style={{ fontSize: "70px", color: "#87ceeb" }} />
        </div>
        <div className="service-text">
          <p>On time Delivery.</p>
          <p>On time Delivery.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
