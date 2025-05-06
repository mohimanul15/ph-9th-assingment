import { Link } from 'react-router';
import logo from '../../../../assets/logo.png';

const LogoutHeader = () => {
    return (
        <header className="navbar bg-[#FFFFFF40] z-10 shadow-sm sticky top-0 backdrop-blur-sm -mb-20">
            <div className="flex-1">
                <Link to={'/'}><img src={logo} alt="Site Logo" className='max-h-16'/></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/login/signup'} className='btn btn-primary hover:animate-pulse'>Sign Up</Link></li>
                    <li><Link to={'/login'} className='btn ml-2 btn-primary hover:animate-pulse'>Login</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default LogoutHeader;