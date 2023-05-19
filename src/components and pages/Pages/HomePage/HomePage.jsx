import { useLoaderData } from 'react-router-dom';
import Banner from '../../Banner/Banner';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import ToyGallery from '../../ToyGallery/ToyGallery';
import './HomePage.css';

const HomePage = () => {
    const allToys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ShopByCategory allToys={allToys}></ShopByCategory>
        </div>
    );
};

export default HomePage;