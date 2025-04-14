import { Link, Links } from 'react-router';
import logo from '../../../../../public/assets/logo.png'

const LogoutHeader = () => {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <Link to={'/'}><img src={logo} alt="Site Logo" className='max-h-16'/></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/login/signup'}>Sign Up</Link></li>
                    <li><Link to={'/login'}>Login</Link></li>
                </ul>
            </div>
        </header>
    );
};

export default LogoutHeader;