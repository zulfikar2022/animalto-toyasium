import Banner from '../../Banner/Banner';
import ShopByCategory from '../../ShopByCategory/ShopByCategory';
import ToyGallery from '../../ToyGallery/ToyGallery';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <ToyGallery></ToyGallery>
            <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default HomePage;