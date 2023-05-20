import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import ToyGallery from '../../ToyGallery/ToyGallery';
import './HomePage.css';
import MobileApp from '../../MobileApp/MobileApp';

const HomePage = () => {
    const allToys = useLoaderData();
    console.log(allToys);
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <MobileApp></MobileApp>
            <ShopByCategory allToys={allToys}></ShopByCategory>
        </div>
    );
};

export default HomePage;