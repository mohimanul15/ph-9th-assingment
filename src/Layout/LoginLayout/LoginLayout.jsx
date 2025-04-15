import { Outlet } from 'react-router';
import LogoutHeader from '../Components/Header/LogoutHeader/LogoutHeader'

const LoginLayout = () => {

    return (
        <div>
            <LogoutHeader></LogoutHeader>
            <Outlet></Outlet>           
        </div>
    );
};

export default LoginLayout;