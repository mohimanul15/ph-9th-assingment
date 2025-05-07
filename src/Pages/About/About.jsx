import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About | Lingo Bingo</title>
            </Helmet>

            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 pt-40 pb-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center my-3'>
                    About
                </h2>

                <h3 className='font-bold text-white text-lg md:text-xl lg:text-3xl text-center'>
                    Welcome to my PortFolio
                </h3>
            </section>

            <section className='max-w-6xl mx-auto my-15'>
                <div className='bg-slate-100 rounded-xl p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center'>
                    <iframe
                        src="https://ph-assignment-06-b10.netlify.app/"
                        frameBorder={0}
                        height={450}>
                    </iframe>
                    <iframe
                        src="https://ph-7th-assignment.netlify.app/"
                        frameborder="0"
                        height={450}>
                    </iframe>
                    <iframe src="https://ph-8th-assignment-b10.surge.sh/" frameborder="0" height={450}></iframe>
                    <iframe src="https://mohimanul15.github.io/ph-5th-assignment/" frameborder="0" height={450}></iframe>
                    <iframe src="https://bamdgroup.com/" frameborder="0" height={450}></iframe>
                </div>
            </section>
        </div>
    );
};

export default About;