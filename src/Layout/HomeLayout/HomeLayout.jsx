import { Outlet } from 'react-router';
import LoginHeader from '../Components/Header/LoginHeader/LoginHeader'
import Footer from '../Components/Footer/Footer'

const HomeLayout = () => {
    return (
        <>
            <LoginHeader></LoginHeader>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default HomeLayout;