import "./ToyGallery.css";

const ToyGallery = () => {
  return (
    <div className="mt-3">
        <p className="text-center fs-1 fw-bold">Our Toys Gallery</p>
      <div className="gallery-container">
        <img src={`https://i.ibb.co/crG45w8/lion2.jpg`} alt="" />
        <img src={`https://i.ibb.co/zGJyXtZ/cuteLion.jpg`} alt="" />
        <img src={`https://i.ibb.co/3YMvpsB/lionToy.jpg`} alt="" />
        <img src={`https://i.ibb.co/k3xzr0Z/sea2.jpg`} alt="" />
        <img src={`https://i.ibb.co/SmVgfqY/sea.jpg`} alt="" />
        <img src={`https://i.ibb.co/bNZR538/half.jpg`} alt="" />
        <img src={`https://i.ibb.co/Wg19BWv/red.jpg`} alt="" />
        <img src={`https://i.ibb.co/3mCmW2H/bathjpg.jpg`} alt="" />
        <img src={`https://i.ibb.co/CtKjH3F/many-Cowjpg.jpg`} alt="" />
      </div>
    </div>
  );
};

export default ToyGallery;
