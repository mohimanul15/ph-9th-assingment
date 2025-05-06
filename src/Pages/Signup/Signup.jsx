import React, { useContext, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router';
import bground from '../../assets/image/bg1.png';
import { ApiContext } from '../../AppContext/AppContext';
import { Bounce, ToastContainer } from 'react-toastify';
import { AccountCreated, InvalidEmail, ProvideAllData, UserAlreadyExist } from '../../ToastPop/ToastPop';

const Signup = () => {

    const [isFocused, setIsFocused] = useState(false);

    const [pass, setPass] = useState('');
    const [passCap, setPassCap] = useState(false);
    const [passLow, setPassLow] = useState(false);
    const [passSix, setPassSix] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const pasData = useRef('');

    const locData = useLocation();
    const navigate = useNavigate();

    const { createUserEmailPass: createNewUser, updateImageName, user } = useContext(ApiContext);

    const bgStyles = {
        backgroundImage: `url(${bground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '100px 0px',
    }


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);

        const name = formdata.get('name')+ ' ';
        const email = formdata.get('email');
        const image = formdata.get('photo');
        const password = formdata.get('pass');

        // console.log(name, email, image, password)

        if (!name || !email || !image || !password) {
            ProvideAllData();
            return
        }

        createNewUser(email, password)
            .then(res => {
                AccountCreated();
                updateImageName(image, name)
                    .then(res2 => {
                        console.log('image Updated', res2);
                    })
                    .catch(error => {
                        console.log(error, 'Unable to update image');
                    })
            })
            .catch(error => {
                console.log('Profile created', error.message, error.code)
                if (error.code.includes('email-already-in-use')) {
                    UserAlreadyExist();
                }
                if(error.code.includes('invalid-email')){
                    InvalidEmail();
                }
            })
    }

    if (user) {
        user && locData?.state ? navigate(locData.state) : user && navigate('/');
    }



    const passPolicy = (e) => {
        let pass = e.target.value;
        setPass(pass);
    }

    useEffect(()=>{
        if(isFocused){
            document.getElementById('policyCheck').classList.remove('hidden');
        }
    },[isFocused])

    useEffect(()=>{
        if(/[A-Z]/.test(pass)){
            setPassCap(true);
        }else{
            setPassCap(false);
        }

        if(/[a-z]/.test(pass)){
            setPassLow(true);
        }else{
            setPassLow(false);
        }

        if(pass.length >= 6){
            setPassSix(true);
        }else{
            setPassSix(false);   
        }

        if(/[A-Z]/.test(pass) && /[a-z]/.test(pass) && pass.length >= 6){
            setIsActive(true);
        }else{
            setIsActive(false)
        }
    },[pass])


    if(isActive){
        document.getElementById('submitBut').removeAttribute('disabled');
    }else{
        if(document.getElementById('submitBut') !== null){
            document.getElementById('submitBut').setAttribute('disabled',true);
        }
    }

    return (
        <>
            <div
                style={bgStyles}>
                <Helmet>
                    <title>
                        Sign Up | Lingo Bingo
                    </title>
                </Helmet>
                <div className='container mx-auto'>
                    <div className="rounded-xl mx-auto card w-full max-w-sm shrink-0 shadow-2xl backdrop-blur-3xl bg-[#FFFFFF75]">

                        <div className='mx-auto my-2'>
                            <h1 className='text-5xl font-bold'>Sign Up</h1>
                        </div>

                        <div className='divider px-6 my-2'></div>

                        <div className="card-body">
                            <form onSubmit={handleFormSubmit}>
                                <fieldset className="fieldset">
                                    <label className="fieldset-label">Full Name</label>
                                    <input type="text" className="input" placeholder="Enter Name" name='name' required />

                                    <label className="fieldset-label">Email</label>
                                    <input type="email" className="input" placeholder="Email" name='email' required />

                                    <label className="fieldset-label">Your Photo</label>
                                    <input type="text" className="input" placeholder="Photo Url" name='photo' required />

                                    <label className="fieldset-label">Password</label>
                                    <input 
                                        type="password" 
                                        className="input" 
                                        placeholder="Password" 
                                        name='pass'
                                        onFocus={()=>setIsFocused(true)}
                                        onBlur={()=>setIsFocused(false)} 
                                        onChange={passPolicy} 
                                        ref={pasData}
                                        required />

                                    <div className='px-1 font-medium opacity-80'>
                                        <ul id='policyCheck'
                                            className='hidden'>
                                            <li 
                                                className={`${passCap?'text-green-700':'text-red-600'}`}>
                                                Must have an Uppercase letter
                                            </li>
                                            
                                            <li className={`${passLow?'text-green-700':'text-red-600'}`}>
                                                Must have a Lowercase letter
                                            </li>
                                            
                                            <li className={`${passSix?'text-green-700':'text-red-600'}`}>
                                                Must be at least 6 character
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        Already have an account?
                                        <Link className="link link-hover text-base-300 ml-2" to={'/login'}>Login</Link>
                                    </div>

                                    <div id='ErrMesseage' className='text-red-700 duration-700 animate-pulse'>
                                    </div>

                                    <button 
                                        className="btn btn-neutral mt-4" 
                                        id='submitBut'
                                        disabled
                                        >Register
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}>

            </ToastContainer>
        </>
    );
};

export default Signup;