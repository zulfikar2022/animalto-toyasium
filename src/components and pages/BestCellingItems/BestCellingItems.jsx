import './BestCellingItems.css'
import { FaArrowRight } from 'react-icons/fa';
import 'aos/dist/aos.css';

const BestCellingItems = () => {
    return (
        <div className='bsi-container text-center'>
            <div className='bsi-1' data-aos="fade-right">
                <p>Discover Our Best Rated Items</p>
                <FaArrowRight />
            </div>
            <div className='bsi-2' data-aos="fade-left">
                <p>Discover Our Best Celling Items</p>
                <FaArrowRight/>
            </div>
        </div>
    );
};

export default BestCellingItems;