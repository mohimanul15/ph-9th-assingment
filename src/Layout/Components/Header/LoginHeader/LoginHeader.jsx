import { useContext, useEffect, useState } from "react";
import { ApiContext } from "../../../../AppContext/AppContext";
import { Link, NavLink } from "react-router";
import Logo from '../../../../assets/logo.png';

const LoginHeader = () => {
    const { user, signOutAll} = useContext(ApiContext);

    const handleSignOut = () => {
        signOutAll();
    }


    const menu = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/learning'}>Start Learning</NavLink></li>
        <li><NavLink to={'/tutorial'}>Tutorials</NavLink></li>
        {
            user && <li><NavLink to={'/lesson'}>Lesson</NavLink></li>
        }
        <li><NavLink to={'/about'}>About Us</NavLink></li>
    </>

    // console.log(user.photoURL);

    return (
        <div className="-mb-20 bg-[#FFFFFF40] backdrop-blur-sm z-10 shadow-sm sticky top-0">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <Link to={'/'}><img src={Logo} alt="Site Logo" className="max-h-16" /></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>

                <div className="navbar-end">

                    {
                        user ?
                            <div className="flex items-center gap-3">
                                <h3 className="max-[400px]:hidden">Welcome 
                                    <span className="font-news ml-2 font-bold text-purple-950 text-lg">
                                        {user.displayName.substr(0,7)}
                                    </span>
                                </h3>

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="User Image"
                                                src={user.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                        <li>
                                            <Link to={'/profile'} className="w-full flex justify-center btn">
                                                Profile
                                            </Link>
                                        </li>

                                        <li className="mt-2">
                                            <button className="btn btn-primary" onClick={handleSignOut}>
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div> :
                            <Link to={'/login'}><button className="btn btn-primary">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default LoginHeader;