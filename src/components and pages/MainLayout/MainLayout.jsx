import { Outlet } from 'react-router-dom';
import Footer from '../SharedComponents/Footer/Footer';
import NavBar from '../SharedComponents/NavBar.jsx/NavBar';
import './MainLayout.css';

const MainLayout = () => {
    return (
        <div className='container mt-2'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;