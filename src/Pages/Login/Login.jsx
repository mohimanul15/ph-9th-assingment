import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ApiContext } from '../../AppContext/AppContext';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {
    const navigate = useNavigate();
    const {googleLogin, setUser,user,wait} = useContext(ApiContext);
    
    const handleGoogleClick = () => {
        googleLogin()
            .then((res)=>{
                setUser(res.user);
                navigate('/');
            })
            .catch((error)=>{
                console.log(error)
            })
    }

    user && navigate('/');

    return (
        <>
            <div className='container mx-auto'>
                <div className="rounded-xl mx-auto mt-16 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className='mx-auto my-2'>
                        <h1 className='text-5xl font-bold'>Login</h1>
                    </div>

                    <div className='divider px-6 my-2'></div>

                    <div className='flex flex-col justify-center items-center gap-3'>
                        <h3 className='text-lg font-bold'>Login With SSO</h3>
                        <div className='w-full flex justify-center flex-col gap-3 max-w-10/12'>
                            <button className='flex items-center gap-2 btn min-w-10/12 text-base font-bold rounded-lg' onClick={handleGoogleClick}>Login With <FaGoogle className='text-main' /></button>
                            <button className='flex items-center gap-2 btn min-w-10/12 text-base font-bold rounded-lg'>Login With <FaLinkedin className='text-main' /></button>
                        </div>
                    </div>

                    <div className='divider px-6 my-2'></div>

                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="fieldset-label">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="fieldset-label">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;