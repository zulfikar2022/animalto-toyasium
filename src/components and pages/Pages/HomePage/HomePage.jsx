import { useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import ShopByCategory from "../../ShopByCategory/ShopByCategory";
import ToyGallery from "../../ToyGallery/ToyGallery";
import "./HomePage.css";
import MobileApp from "../../MobileApp/MobileApp";
import BestCellingItems from "../../BestCellingItems/BestCellingItems";

const HomePage = () => {
  const allToys = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <ToyGallery></ToyGallery>
      <MobileApp></MobileApp>
      <ShopByCategory allToys={allToys}></ShopByCategory>
      <BestCellingItems></BestCellingItems>
    </div>
  );
};

export default HomePage;
