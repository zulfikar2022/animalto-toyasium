import { useEffect } from "react";
import "./ToyGallery.css";
import Aos from "aos";

const ToyGallery = () => {
  useEffect(() => {
    Aos.init({
      // Additional configuration options can be provided here
    });
  }, []);
  return (
    <div className="mt-3">
      <p className="text-center fs-1 fw-bold">Our Toys Gallery</p>
      <div className="gallery-container">
        <img
          data-aos="fade-up"
          data-aos-duration="1000"
          src={`https://i.ibb.co/crG45w8/lion2.jpg`}
          alt=""
        />
        <img
          data-aos="fade-down"
          data-aos-duration="1000"
          src={`https://i.ibb.co/zGJyXtZ/cuteLion.jpg`}
          alt=""
        />
        <img
          data-aos="fade-right"
          data-aos-duration="1000"
          src={`https://i.ibb.co/3YMvpsB/lionToy.jpg`}
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-duration="1000"
          src={`https://i.ibb.co/k3xzr0Z/sea2.jpg`}
          alt=""
        />
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          src={`https://i.ibb.co/SmVgfqY/sea.jpg`}
          alt=""
        />
        <img
          data-aos="zoom-out"
          data-aos-duration="1000"
          src={`https://i.ibb.co/bNZR538/half.jpg`}
          alt=""
        />
        <img
          data-aos="flip-up"
          data-aos-duration="1000"
          src={`https://i.ibb.co/Wg19BWv/red.jpg`}
          alt=""
        />
        <img
          data-aos="flip-down"
          data-aos-duration="1000"
          src={`https://i.ibb.co/3mCmW2H/bathjpg.jpg`}
          alt=""
        />
        <img
          data-aos="flip-right"
          data-aos-duration="1000"
          src={`https://i.ibb.co/CtKjH3F/many-Cowjpg.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default ToyGallery;
