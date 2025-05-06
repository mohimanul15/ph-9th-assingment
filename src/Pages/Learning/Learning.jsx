import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Lessons from '../../Layout/Components/Lessons/Lessons';
import YouTube from 'react-youtube';
import { Helmet } from 'react-helmet';

const Learning = () => {

    const options = {
        width: '100%',
        height: '100%',
        playerVars: {
            autoplay: 0,
            controls: 1,
        },
    };

    const lesson = useLoaderData();

    // console.log(lesson);

    return (
        <div>
            <Helmet>
                <title>Learning | Lingo Bingo</title>
            </Helmet>
            
            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 pt-40 pb-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center'>
                    Let's Start Learning Russian
                </h2>
            </section>

            {/* page Content */}
            <section className='max-w-6xl mx-auto px-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-15'>
                    {
                        lesson.map(data => <Lessons key={data.id} lessonData={data}></Lessons>)
                    }
                </div>
            </section>

            {/* Tutorial content */}
            <section className='bg-linear-to-br from-blue-900 to-purple-950 place-content-center max-w-6xl mx-auto rounded-2xl my-10 py-15 px-3'>
                <div className='flex gap-8 flex-col lg:flex-row'>
                    <div className='mx-auto rounded-3xl overflow-clip w-full h-auto relative flex-1/2'>
                        <YouTube
                            videoId='tYDMSM5dosE'
                            opts={options}
                            className='opacity-90'
                            style={{aspectRatio:16/9}}
                        >
                        </YouTube>
                    </div>

                    <div className='bg-white rounded-2xl p-5 flex-1/2'>
                        <h3 className='font-extrabold text-neutral-900 text-lg md:text-2xl lg:text-4xl max-md:text-center'>
                            Start by learning the alphabet
                        </h3>

                        <p className='text-neutral-700 text-xs md:text-lg max-md:text-center max-md:max-w-lg max-md:mx-auto my-3'>
                            Mastering the Cyrillic alphabet is your first step toward unlocking the Russian language. Don’t worry—it’s easier than you think! With our interactive approach, you’ll be reading signs, menus, and messages in no time.
                        </p>

                        <div className="justify-center md:justify-start card-actions mt-4">
                            <Link to={'/tutorial'}>
                                <button className="btn btn-primary">
                                    View More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Learning;