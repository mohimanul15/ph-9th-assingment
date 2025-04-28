import React from 'react';
import { useLoaderData } from 'react-router';
import Lessons from '../../Layout/Components/Lessons/Lessons';

const Learning = () => {

    const lesson = useLoaderData();

    console.log(lesson);

    return (
        <div >
            This is learning page
            <section className='max-w-6xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-15'>
                    {
                        lesson.map(data => <Lessons key={data.id} lessonData={data}></Lessons>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Learning;