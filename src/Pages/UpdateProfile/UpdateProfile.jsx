import React, { useContext } from 'react';
import { ApiContext } from '../../AppContext/AppContext';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { FirebaseUpdateError, InsertValidNameImage, ProfileUpdated } from '../../ToastPop/ToastPop';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {

    const { user, updateImageName, setUser} = useContext(ApiContext);

    const { displayName, photoURL } = user;

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target)

        const name = formdata.get('name');
        const image = formdata.get('photo');

        if(name && image){

            updateImageName(image,name)
                .then(res => {
                    ProfileUpdated();
                    setUser(user);

                    setTimeout(()=>{
                        navigate('/profile');
                    },3000)
                })
                .catch(err => {
                    FirebaseUpdateError();
                })
            
        }else{
            InsertValidNameImage();
        }
    }

    return (
        <>
            <Helmet>
                <title>Update Profile | Lingo Bingo</title>
            </Helmet>

            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 pt-40 pb-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center my-3'>
                    Update Info
                </h2>
            </section>

            <section className='max-w-6xl mx-auto my-15 flex flex-row gap-3'>
                <div className='flex-2/3 bg-slate-100 rounded-xl p-4'>

                    <div className='flex flex-col gap-3 text-lg'>
                        
                        <h3 className='text-center font-bold text-xl md:text-3xl'>Update User Information</h3>

                        <div className="card-body max-w-96 mx-auto">
                            <form onSubmit={handleFormSubmit} className='w-full'>
                                <fieldset className="fieldset w-full">
                                    <label className="fieldset-label">Full Name</label>
                                    <input type="text" className="input sm:w-72" placeholder="Enter Name" name='name'
                                        defaultValue={displayName}
                                        required />

                                    <label className="fieldset-label">Your Photo</label>
                                    <input type="text" className="input" placeholder="Photo Url" name='photo'
                                        defaultValue={photoURL}
                                        required />

                                    <button
                                        className="btn btn-neutral mt-4 uppercase"
                                    >Submit Update
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer></ToastContainer>
        </>
    );
};

export default UpdateProfile;