import { Outlet } from 'react-router';
import LogoutHeader from '../Components/Header/LogoutHeader/LogoutHeader'
import Footer from '../Components/Footer/Footer'

const LoginLayout = () => {

    return (
        <div>
            <LogoutHeader></LogoutHeader>
            <Outlet></Outlet>   
            <Footer></Footer>        
        </div>
    );
};

export default LoginLayout;