import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ApiContext } from '../../AppContext/AppContext';
import { Link, useLocation, useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';
import bground from '../../assets/image/bg1.png';

const Login = () => {

    const navigate = useNavigate();
    const { checkUserEmailPassword: emailPassCheck, googleLogin, setUser, user, wait } = useContext(ApiContext);

    const bgStyles = {
        backgroundImage: `url(${bground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '100px 0px',
    }

    const handleGoogleClick = () => {
        googleLogin()
            .then((res) => {
                setUser(res.user);
                navigate('/');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleFormSubmit = e => {
        document.getElementById('ErrMesseage').innerText = '';
        e.preventDefault();
        const formdata = new FormData(e.target);

        // console.log(formdata.get('email'));
        const email = formdata.get('email');
        const password = formdata.get('pass');

        if (email !== null && password !== null) {
            emailPassCheck(email, password)
                .then(res => {
                    console.log(res);
                })
                .catch(error => {
                    document.getElementById('ErrMesseage').innerText = error.message.split('(')[1].slice(0, -2);
                })
        } else {
            console.log('Please enter valid email and password')
        }
    }

    user && navigate('/');

    return (
        <>
            <div style={bgStyles}>
                <Helmet>
                    <title>
                        Login | Lingo Bingo
                    </title>
                </Helmet>
                <div className='container mx-auto'>
                    <div className="rounded-xl mx-auto card bg-[#FFFFFF90] w-full max-w-sm shrink-0 shadow-2xl">
                        <div className='mx-auto my-2'>
                            <h1 className='text-5xl font-bold'>Login</h1>
                        </div>

                        <div className='divider px-6 my-2'></div>

                        <div className='flex flex-col justify-center items-center gap-3'>
                            <h3 className='text-lg font-bold'>Login With SSO</h3>
                            <div className='w-full flex justify-center flex-col gap-3 max-w-10/12'>
                                <button className='flex items-center gap-2 btn min-w-10/12 text-base font-bold rounded-lg' onClick={handleGoogleClick}>Login With <FaGoogle className='text-main' /></button>
                                {/* <button className='flex items-center gap-2 btn min-w-10/12 text-base font-bold rounded-lg'>Login With <FaLinkedin className='text-main' /></button> */}
                            </div>
                        </div>

                        <div className='divider px-6 my-2'></div>

                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />
                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='pass' />
                                    <div><Link to={'/login/forget'} className="link link-hover">Forgot password?</Link></div>
                                    <div id='ErrMesseage' className='text-red-700 duration-700 animate-pulse'>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;