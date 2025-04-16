import React, { useContext } from 'react';
import bground from '../../assets/image/bg1.png';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router';
import { ApiContext } from '../../AppContext/AppContext';


const Forget = () => {

    const {resetPass} = useContext(ApiContext);

    const bgStyles = {
        backgroundImage: `url(${bground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '100px 0px',
    }


    const handleFormSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;

        resetPass(email)
            .then(res => {
                document.getElementById('ErrMesseage').innerText = 'A Password Reset link has been sent to your email. Please use the reset link to change your account password';

                e.target.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div style={bgStyles}>
                <Helmet>
                    <title>
                        Forget Credentials | Lingo Bingo
                    </title>
                </Helmet>
                <div className='container mx-auto'>
                    <div className="rounded-xl mx-auto card bg-[#FFFFFF90] w-full max-w-sm shrink-0 shadow-2xl">
                        
                        <div className='mx-auto my-2'>
                            <h1 className='text-5xl font-bold'>Forget</h1>
                        </div>

                        <div className='divider px-6 my-2'></div>

                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' required/>
                                    
                                    <div>
                                        <Link 
                                            to={'/login/forget'} 
                                            className="link link-hover">
                                                Forgot password?
                                        </Link>
                                    </div>

                                    <div id='ErrMesseage' className='text-green-800 duration-700 animate-pulse'>
                                    </div>
                                    <button className="btn btn-neutral mt-4">Send</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Forget;