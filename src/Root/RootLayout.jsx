import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import NavBar from '../component/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;