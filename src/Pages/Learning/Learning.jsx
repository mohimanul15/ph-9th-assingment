import React from 'react';
import { useLoaderData } from 'react-router';
import Lessons from '../../Layout/Components/Lessons/Lessons';

const Learning = () => {

    const lesson = useLoaderData();

    console.log(lesson);

    return (
        <div>
            {/* Page Title */}
            <section className='bg-linear-to-br from-blue-800 to-purple-900 py-20'>
                <h2 className='font-extrabold text-white text-xl md:text-2xl lg:text-5xl text-center'>
                    Let's Start Learning Russian
                </h2>
            </section>

            {/* page Content */}
            <section className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-15'>
                    {
                        lesson.map(data => <Lessons key={data.id} lessonData={data}></Lessons>)
                    }
                </div>
            </section>

            {/* Tutorial content */}
            <section className='bg-neutral-300 place-content-center'>
                    <div>

                    </div>
            </section>
        </div>
    );
};

export default Learning;