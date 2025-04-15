import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import bground from '../../assets/image/bg1.png';

const Signup = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);

        const name = formdata.get('name');
        const email = formdata.get('email');
        const image = formdata.get('photo');
        const password = formdata.get('pass');

        console.log(name, email, image, password)
    }

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${bground})`, backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover',
                    padding: '100px 0px',
                }}>
                <Helmet>
                    <title>
                        Sign Up | Lingo Bingo
                    </title>
                </Helmet>
                <div className='container mx-auto'>
                    <div className="rounded-xl mx-auto card w-full max-w-sm shrink-0 shadow-2xl backdrop-blur-3xl bg-[#FFFFFF55]">

                        <div className='mx-auto my-2'>
                            <h1 className='text-5xl font-bold'>Sign Up</h1>
                        </div>

                        <div className='divider px-6 my-2'></div>

                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Full Name</label>
                                    <input type="text" className="input" placeholder="Enter Name" name='name' />

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' />

                                    <label className="fieldset-label">Your Photo</label>
                                    <input type="text" className="input" placeholder="Photo Url" name='photo' />

                                    <label className="fieldset-label">Password</label>
                                    <input type="password" className="input" placeholder="Password" name='pass' />

                                    <div>
                                        Already have an account?
                                        <Link className="link link-hover text-blue-600 ml-2" to={'/login'}>Login</Link>
                                    </div>

                                    <div id='ErrMesseage' className='text-red-700 duration-700 animate-pulse'>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Register</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;