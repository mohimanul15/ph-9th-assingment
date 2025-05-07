import React, { useContext } from 'react';
import { ApiContext } from '../../AppContext/AppContext';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router';

const Profile = () => {

    const { user } = useContext(ApiContext)

    const { displayName, photoURL, email } = user;


    return (
        <div>

            <Helmet>
                <title>Profile | Lingo Bingo</title>
            </Helmet>

            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 pt-40 pb-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center my-3'>
                    Profile
                </h2>

                <h3 className='font-bold text-white text-lg md:text-xl lg:text-3xl text-center'>
                    Welcome {displayName}
                </h3>
            </section>

            <section className='max-w-6xl mx-auto my-15 flex flex-row gap-3'>
                <div className='flex-1/3 bg-blue-300 rounded-xl p-4'>
                    <div className='flex justify-center py-8'>
                        <img src={photoURL} alt="" className='rounded-4xl outline-4 outline-purple-500' />
                    </div>

                    <div className='place-items-center'>
                        <h2 className='font-medium text-base md:text-xl '>
                            {displayName}
                        </h2>
                    </div>
                </div>

                <div className='flex-2/3 bg-slate-100 rounded-xl p-4'>
                    <div className='flex flex-col gap-3 text-lg'>
                        <h3>Name : {displayName}</h3>
                        <h3>Email: {email}</h3>
                        <h3>Phone: N/A</h3>
                        <Link to={'/profile/update-profile'}>
                            <button className='btn btn-primary w-fit'>
                                Update Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;